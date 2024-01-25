CREATE DATABASE "facilita";

-- Habilitando uuid
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS clients (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR,
  phone VARCHAR,
  coordinates VARCHAR
);
