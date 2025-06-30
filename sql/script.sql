CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);


CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  cpf TEXT NOT NULL,
  phone TEXT NOT NULL UNIQUE,
  carrier_id INTEGER NOT NULL REFERENCES carriers(id),
  name TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE recharges (
  id SERIAL PRIMARY KEY,
  phone_id INTEGER NOT NULL REFERENCES phones(id),
  price INTEGER NOT NULL CHECK (price >= 1000 and price <= 100000)
);