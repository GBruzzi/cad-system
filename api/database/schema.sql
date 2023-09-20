CREATE DATABASE crud;

CREATE TABLE usuarios (
    id serial PRIMARY KEY NOT NULL,
    name varchar(255) NOT NULL,
    email varchar(255) UNIQUE,
    phone varchar(255),
    data_nascimento date
);