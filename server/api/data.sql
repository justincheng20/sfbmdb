DROP DATABASE IF EXISTS "sfbmdb";

CREATE DATABASE "sfbmdb";

\c "sfbmdb"

CREATE TABLE sandwiches (id SERIAL PRIMARY KEY, 
                    name TEXT NOT NULL, 
                    price decimal(4,2) NOT NULL,
                    description TEXT NOT NULL,
                    music TEXT NOT NULL,
                    spotify TEXT NOT NULL);
                    
INSERT INTO sandwiches (name, price, description, music, spotify) VALUES
    ('Bahn Mi King', 8.00, 'Solid, reliable, but not exciting','80s Synthpop','1gsQmDnyXfq6jPIXYCPKHB'),
    ('Les Croissants', 7.00, 'Not the best quality but warm and familiar','90s Lo-Fi Indie Rock','1VfgWgELCIpe9pB3cLuDnJ');
    
