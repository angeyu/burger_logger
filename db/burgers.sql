USE burger_db;

CREATE TABLE burgers (
	id int AUTO_INCREMENT NOT NULL,
	description VARCHAR(255),
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
