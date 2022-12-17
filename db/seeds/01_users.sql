INSERT INTO users (username, email, password)
 VALUES ('Alice', 'alice@email.com', 'password'),   -- one car
        ('Bob', 'bob@email.com', 'password'),       -- one car
        ('Corey', 'corey@email.com', 'password'),   -- three cars
        ('Doug', 'doug@email.com', 'password'),     -- one car
        ('Emily', 'emily@email.com', 'password'),   -- one car
        ('Frank', 'frank@email.com', 'password'),   -- no cars
        ('Gayle', 'gayle@email.com', 'password'),   -- one car
        ('Harry', 'harry@email.com', 'password'),   -- two cars
        ('Isobel', 'isobel@email.com', 'password'), -- no cars
        ('John', 'john@email.com', 'password');     -- no cars


-- user: 1 => listed car: 1
-- user: 2 => listed car: 2
-- user: 3 => listed car: 3, 4, 5
-- user: 4 => listed car: 6
-- user: 5 => listed car: 7
-- user: 7 => listed car: 8
-- user: 8 => listed car: 9, 10
