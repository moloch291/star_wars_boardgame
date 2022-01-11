DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
    id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT UNIQUE,
    password TEXT
);