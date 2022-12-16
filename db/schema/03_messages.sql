DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE,
  lister_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  buyer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  timestamp TIMESTAMP NOT NULL,
  message TEXT NOT NULL,
  reply BOOLEAN NOT NULL DEFAULT FALSE
);