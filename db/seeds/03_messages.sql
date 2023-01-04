INSERT INTO messages (car_id, lister_id, buyer_id, timestamp, message, reply)
 VALUES (1, 1, 3, '2022-10-31T08:07:00.000Z', 'Hi Alice, this is Corey. I am messaging about your Ferrari', FALSE),
        (1, 1, 3, '2022-10-31T08:08:10.000Z', 'I have some questions about the car', FALSE),
        (1, 1, 3, '2022-10-31T08:17:15.000Z', 'Hi Corey, thank you. What else would you like to know?', TRUE),

        (2, 2, 1, '2019-02-01T10:45:30.000Z', 'Hi Bob, my name is Alice and I would like to buy your Lamborghini!', FALSE),
        (2, 2, 1, '2019-02-01T18:01:44.000Z', 'Alice, that is great to hear! We should meet up.', TRUE),

        (3, 3, 2, '2020-07-03T05:30:55.000Z', 'Hi Corey, Bob here. Lets talk about the Rolls-Royce!', FALSE),

        (4, 3, 9, '2020-07-03T05:30:55.000Z', 'Msg1: from buyer 9 to lister 3 about car 4', FALSE),
        (4, 3, 9, '2020-07-04T05:30:55.000Z', 'Msg2: from lister 3 (replying to 9 about car 4)', TRUE),

        (5, 3, 1, '2020-07-01T05:30:55.000Z', 'Msg1: from buyer 1 to lister 3 about car 5', FALSE),
        (5, 3, 1, '2020-07-05T05:30:55.000Z', 'Msg2: from buyer 1 to lister 3 about car 5', FALSE),
        (5, 3, 1, '2020-07-08T05:30:55.000Z', 'Msg3: from lister 3 (replying to 1 about car 5)', TRUE),
        (5, 3, 1, '2020-07-10T05:30:55.000Z', 'Msg4: from buyer 1 to lister 3 about car 5', FALSE),
        (5, 3, 1, '2020-07-12T05:30:55.000Z', 'Msg5: from lister 3 (replying to 1 about car 5)', TRUE),
        (5, 3, 1, '2020-08-01T05:30:55.000Z', 'Msg6: from buyer 1 to lister 3 about car 5', FALSE),

        (5, 3, 10, '2020-08-01T05:30:55.000Z', 'Msg1: from buyer 10 to lister 3 about car 5', FALSE),

        (6, 4, 8, '2020-02-04T05:30:55.000Z', 'Msg1: from buyer 8 to lister 4 about car 6', FALSE),
        (6, 4, 8, '2020-02-06T05:30:55.000Z', 'Msg2: from buyer 8 to lister 4 about car 6', FALSE),
        (6, 4, 8, '2020-02-07T05:30:55.000Z', 'Msg3: from buyer 8 to lister 4 about car 6', FALSE),
        (6, 4, 8, '2020-02-08T05:30:55.000Z', 'Msg4: from lister 4 (to 10 about car 6)', TRUE),

        (6, 4, 9, '2020-07-03T05:30:55.000Z', 'Msg1: from buyer 9 to lister 4 about car 6', FALSE),
        (6, 4, 5, '2020-07-04T05:30:55.000Z', 'Msg1: from buyer 5 to lister 4 about car 6', FALSE),
        (6, 4, 5, '2020-07-05T05:30:55.000Z', 'Msg2: from buyer 5 to lister 4 about car 6', FALSE),
        (6, 4, 6, '2020-07-06T05:30:55.000Z', 'Msg1: from buyer 6 to lister 4 about car 6', FALSE),

        (8, 7, 4, '2020-07-03T05:30:55.000Z', 'Msg1: from buyer 4 to lister 7 about car 8', FALSE),
        (8, 7, 4, '2020-07-03T06:30:55.000Z', 'Msg2: from buyer 4 to lister 7 about car 8', FALSE),
        (8, 7, 4, '2020-07-03T07:30:55.000Z', 'Msg3: from buyer 4 to lister 7 about car 8', FALSE),
        (8, 7, 4, '2020-07-03T08:30:55.000Z', 'Msg4: from buyer 4 to lister 7 about car 8', FALSE),
        (8, 7, 4, '2020-07-03T09:30:55.000Z', 'Msg5: from lister 7 (to 4 about car 8)', TRUE),
        (8, 7, 4, '2020-07-03T10:30:55.000Z', 'Msg6: from lister 7 (to 4 about car 8)', TRUE),
        (8, 7, 4, '2020-07-03T11:30:55.000Z', 'Msg7: from buyer 4 to lister 7 about car 8', FALSE),
        (8, 7, 4, '2020-07-03T12:30:55.000Z', 'Msg8: from lister 7 (to 4 about car 8)', TRUE),
        (8, 7, 4, '2020-07-03T13:30:55.000Z', 'Msg9: from buyer 4 to lister 7 about car 8', FALSE),
        (8, 7, 4, '2020-07-03T14:30:55.000Z', 'Msg10: from buyer 4 to lister 7 about car 8', FALSE),
        (8, 7, 4, '2020-07-03T15:30:55.000Z', 'Msg11: from lister 7 (to 4 about car 8)', TRUE),

        (8, 7, 5, '2020-07-04T10:30:55.000Z', 'Msg11: from buyer 5 to lister 7 about car 8', TRUE),

        (9, 8, 6, '2020-07-03T05:30:55.000Z', 'Msg1: from buyer 6 to lister 8 about car 9', FALSE),
        (10, 8, 6, '2020-07-03T05:30:55.000Z', 'Msg1: from buyer 6 to lister 8 about car 10', FALSE);



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
