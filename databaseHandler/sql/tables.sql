DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS side;

CREATE TABLE profile (
    id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT UNIQUE,
    password TEXT,
    sideId INT,
    CONSTRAIN fk_side
        FOREIGN KEY(sideId)
            REFERENCES side(sideId)
);

CREATE TABLE side (
    id INT PRIMARY KEY,
    name TEXT
);

INSERT INTO sides (id, name) VALUES (1, 'light');
INSERT INTO sides (id, name) VALUES (2, 'dark');