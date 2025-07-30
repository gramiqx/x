CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  geometry GEOMETRY(Polygon, 4326),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO projects (name, created_at) VALUES 
('Agroforestry – Gonda', NOW() - INTERVAL '6 months'),
('Soil Carbon – MP', NOW() - INTERVAL '4 months');