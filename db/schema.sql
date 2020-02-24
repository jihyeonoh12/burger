-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS burger_db;
-- Creates the "todolist" database --
CREATE DATABASE burger_db;

DROP TABLE IF EXISTS burgers;
CREATE TABLE `burger_db`.`burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(45) NULL,
  `devoured` TINYINT NULL,
  PRIMARY KEY (`id`));

Select * From burgers;