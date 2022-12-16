INSERT INTO messages (car_id, lister_id, buyer_id, timestamp, message, reply)
 VALUES (1, 1, 3, '2022-10-31T08:07:00.000Z', 'First message from buyer', FALSE),
        (1, 1, 3, '2022-10-31T08:07:10.000Z', 'Second message from buyer', FALSE),
        (1, 1, 3, '2022-10-31T08:07:15.000Z', 'Third message from lister (replying)', TRUE),
        (2, 2, 1, '2019-02-01T10:45:30.000Z', 'First message from buyer', FALSE),
        (2, 2, 1, '2019-02-01T18:01:44.000Z', 'Second message from lister (replying)', TRUE),
        (3, 3, 2, '2020-07-03T05:30:55.000Z', 'First message from buyer', FALSE);
        