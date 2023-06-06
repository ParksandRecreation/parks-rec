--user table with PK ID
CREATE TABLE users (
"user_id" VARCHAR PRIMARY KEY,
"username" VARCHAR UNIQUE NOT NULL
);

--scores table with highest score and associated user_Id
CREATE TABLE scores (
    "highest_score" INTEGER NOT NULL,
    "user_id" VARCHAR, 
    FOREIGN KEY ("user_id") REFERENCES users("user_id")
);

CREATE TABLE parks (
    "park_id" SERIAL PRIMARY KEY,
    "name" VARCHAR NOT NULL,
    "img_url" VARCHAR NOT NULL
);

CREATE TABLE faves (
    "user_id" VARCHAR,
    "park_id" INTEGER,
    FOREIGN KEY ("user_id") REFERENCES users("user_id"),
    FOREIGN KEY ("park_id") REFERENCES parks("park_id")
);