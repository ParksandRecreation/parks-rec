
--user table with PK ID
CREATE TABLE users (
"_id" PRIMARY KEY,
"oauth_id" VARCHAR NOT NULL,
"username" VARCHAR NOT NULL
);
--scores table with highest score and associated user_Id
CREATE TABLE scores (
    "highest_score" INTEGER NOT NULL,
    "user_id" INTEGER
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE parks (
    "_id" PRIMARY KEY,
    "name" VARCHAR NOT NULL,
    "img_url" VARCHAR NOT NULL
);

CREATE TABLE faves (
    "user_id" INTEGER,
    "park_id" INTEGER,
    FOREIGN KEY ("user_id") REFERENCES users("_id"),
    FOREIGN KEY ("park_id") REFERENCES parks("_id"),
    PRIMARY KEY ("user_id", "park_id")
);