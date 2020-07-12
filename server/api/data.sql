DROP DATABASE IF EXISTS "sfbmdb";

CREATE DATABASE "sfbmdb";

\c "sfbmdb"

CREATE TABLE sandwiches (id SERIAL PRIMARY KEY, 
                    name TEXT NOT NULL, 
                    price decimal(4,2) NOT NULL,
                    description TEXT NOT NULL,
                    music TEXT NOT NULL);
                    
CREATE TABLE comments (id SERIAL PRIMARY KEY, 
                       text TEXT NOT NULL, 
                       sandwich_id INT NOT NULL REFERENCES sandwiches ON DELETE CASCADE);

INSERT INTO sandwiches (name, price, description, music) VALUES
    ('Bahn Mi King', 8.00, 'Solid, reliable, but not exciting','80s Synthpop');
    

INSERT INTO comments (text, sandwich_id) VALUES
    ('This is a really great post.', 1),
    ('I learned so much reading this.', 1);