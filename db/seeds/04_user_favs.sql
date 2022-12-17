INSERT INTO user_favs (car_id, user_id)
 VALUES (1, 2),
        (1, 3),
        (2, 1),
        (2, 3),
        (2, 4),
        (2, 5),
        (2, 6),
        (3, 2),
        (3, 10),
        (4, 7),
        (4, 8),
        (4, 9),
        (4, 10),
        (5, 1),
        (5, 2),
        (5, 6),
        (6, 1),
        (6, 5),
        (6, 7),
        (6, 8),
        (7, 1),
        (7, 9),
        (8, 1),
        (10, 1),
        (10, 2),
        (10, 4),
        (10, 9),
        (10, 10);

-- user: 1 => listed car: 1
-- user: 2 => listed car: 2
-- user: 3 => listed car: 3, 4, 5
-- user: 4 => listed car: 6
-- user: 5 => listed car: 7
-- user: 7 => listed car: 8
-- user: 8 => listed car: 9, 10

-- user 3 has messaged 1 about car 1 (2 messages + 1 reply)
-- user 1 has messaged 2 about car 2 (1 messages + 1 reply)
-- user 2 has messaged 3 about car 3 (1 messages + 0 reply)
-- user 9 has messaged 3 about car 4 (2 messages + 1 reply)
-- user 1 has messaged 3 about car 5 (4 messages + 2 reply)
-- user 10 has messaged 3 about car 5 (1 messages + 0 reply)
-- user 8 has messaged 4 about car 6 (3 messages + 1 reply)
-- user 9 has messaged 4 about car 6 (1 messages + 0 reply)
-- user 5 has messaged 4 about car 6 (2 messages + 0 reply)
-- user 6 has messaged 4 about car 6 (1 messages + 0 reply)
-- no one has messaged 5 about car 7
-- user 4 has messaged 7 about car 8 (7 messages + 4 reply)
-- user 5 has messaged 7 about car 8 (1 messages + 0 reply)
-- user 6 has messaged 8 about car 9 (1 messages + 0 reply)
-- user 6 has messaged 8 about car 10 (1 messages + 0 reply)
