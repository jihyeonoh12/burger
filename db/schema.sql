### Schema

CREATE DATABASE burger_db;

CREATE TABLE burgers 
(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  `devoured` BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
  );

