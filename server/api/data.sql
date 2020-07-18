DROP DATABASE IF EXISTS "sfbmdb";

CREATE DATABASE "sfbmdb";

\c "sfbmdb"

CREATE TABLE sandwiches (id SERIAL PRIMARY KEY, 
                    name TEXT NOT NULL, 
                    price decimal(4,2) NOT NULL,
                    description TEXT NOT NULL,
                    music TEXT NOT NULL);
                    
INSERT INTO sandwiches (name, price, description, music) VALUES
    ('Bahn Mi King', 8.00, 'Solid, reliable, but not exciting','80s Synthpop');
    
