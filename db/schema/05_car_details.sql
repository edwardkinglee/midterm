DROP TABLE IF EXISTS car_details CASCADE;

CREATE TABLE car_details (
  id SERIAL PRIMARY KEY NOT NULL,
  car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE,
  interior_color VARCHAR(255),
  fuel_consumption VARCHAR(255),
  engine VARCHAR(255),
  fuel_type VARCHAR(255),
  transmission VARCHAR(255),
  details TEXT,
  photo1 VARCHAR(255) NOT NULL,
  photo2 VARCHAR(255) NOT NULL,
  photo3 VARCHAR(255) NOT NULL,
  photo4 VARCHAR(255) NOT NULL,
  photo5 VARCHAR(255) NOT NULL,
  photo6 VARCHAR(255) NOT NULL,
  photo7 VARCHAR(255) NOT NULL
);