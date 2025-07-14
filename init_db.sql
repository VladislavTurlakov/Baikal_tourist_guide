CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL,
  role VARCHAR(20) NOT NULL
);

CREATE TABLE server_info (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  value TEXT NOT NULL
);

INSERT INTO users (username, password, role) VALUES 
('admin', 'admin123', 'admin'),
('user', 'user123', 'user');

INSERT INTO server_info (name, value) VALUES
('version', '1.0.0'),
('last_update', '2024-09-30'),
('max_connections', '100');

CREATE TABLE places (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  region VARCHAR(50) NOT NULL,
  image_url VARCHAR(255)
);