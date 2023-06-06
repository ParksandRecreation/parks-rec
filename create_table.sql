
--user table with PK ID
CREATE TABLE USER (
"_id" SERIAL NOT NULL,
"oauth_id" VARCHAR NOT NULL,
"username" VARCHAR NOT NULL
)
--scores table with highest score and associated user_Id
CREATE TABLE scores (
    "highest_score" INTEGER NOT NULL,
    "user_id" INTEGER
    FOREIGN KEY (user_id) REFERENCES user(user_id)
)

CREATE TABLE parks (
    "_id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "img_url" VARCHAR NOT NULL
)

CREATE TABLE faves (
    "user_id",
    "park_id"
)