-- Vidéo
CREATE TABLE video (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(80) NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  is_premium BOOLEAN NOT NULL DEFAULT FALSE,
  is_free BOOLEAN NOT NULL DEFAULT TRUE,
  requires_account BOOLEAN NOT NULL DEFAULT FALSE
);

-- Catégorie
CREATE TABLE category (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(80) NOT NULL
);

CREATE TABLE sub_category (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(80) NOT NULL,
  category_id INT UNSIGNED,
  FOREIGN KEY(category_id) REFERENCES category(id)
);

-- Utilisateur
CREATE TABLE role (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(80) NOT NULL,
  access VARCHAR(40) NOT NULL
);

CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(120) NOT NULL,
  lastname VARCHAR(120) NOT NULL,
  email VARCHAR(120) NOT NULL,
  password TEXT NOT NULL,
  birthdate DATE,
  role_id INT UNSIGNED,
  FOREIGN KEY(role_id) REFERENCES role(id)
);

-- Table de jointure
CREATE TABLE video_category (
  video_id INT UNSIGNED,
  sub_category_id INT UNSIGNED,
  FOREIGN KEY(video_id) REFERENCES video(id),
  FOREIGN KEY(sub_category_id) REFERENCES sub_category(id)
);

CREATE TABLE payment (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  date DATE NOT NULL,
  type VARCHAR(40) NOT NULL,
  user_id INT UNSIGNED,
  FOREIGN KEY(user_id) REFERENCES user(id)
);

CREATE TABLE privilege (
  video_id INT UNSIGNED,
  user_id INT UNSIGNED,
  FOREIGN KEY(video_id) REFERENCES video(id),
  FOREIGN KEY(user_id) REFERENCES user(id)
);