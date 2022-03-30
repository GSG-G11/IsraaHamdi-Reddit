BEGIN;
drop table if exists users, posts, comments, votes CASCADE;
create table users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  post_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (post_id) REFERENCES posts (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);
CREATE TABLE votes (
  id SERIAL PRIMARY KEY,
  post_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (post_id) REFERENCES posts (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);
insert into users (name, email, password) values ('israa','israa@hotmail.com','123456aA@'),
('alaa','alaa@hotmail.com','123456aA@'),
('isaam','isaam@hotmail.com','123456aA@');

insert into posts (title, description, user_id) values ('java','java java java',1),
('express','express express express',2),
('node','node node node',3);

insert into comments (description, user_id, post_id) values ('java nice',2,1),
('express nice',1,3),
('node nice',1,3);
insert into votes (post_id,user_id) values (1,1),
(1,2),
(3,1);
COMMIT;