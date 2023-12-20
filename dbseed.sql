CREATE TABLE employees
(
    id SERIAL,
    name text,
    title text,
    CONSTRAINT employees_pkey PRIMARY KEY (id)
);

INSERT INTO employees(name, title) VALUES
 ('Allan Binga ', 'Full-Stack Developer'),
 ('Owen Michael', 'DevOps Engineer'),
 ('Steve Cooper', 'Data Engineer');