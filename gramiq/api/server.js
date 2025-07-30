const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.get('/', (req, res) => {
  res.json({ message: "GRAMIQ API 🌱 Live!" });
});

app.get('/api/projects', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, created_at FROM projects ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.json([
      { id: 1, name: "Agroforestry – Gonda", created_at: "2024-01-15T10:00:00Z" },
      { id: 2, name: "Soil Carbon – MP", created_at: "2024-02-20T10:00:00Z" }
    ]);
  }
});

app.post('/api/projects', async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name required" });

  try {
    const result = await pool.query(
      'INSERT INTO projects (name, geometry) VALUES ($1, NULL) RETURNING id, name, created_at',
      [name]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Save failed" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});