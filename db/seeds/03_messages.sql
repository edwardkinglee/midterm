INSERT INTO messages (car_id, lister_id, buyer_id, timestamp, message, reply)
 VALUES (1, 1, 3, '2022-10-31T08:07:00.000Z', 'Hi Alice, this is Corey. I am messaging about your Ferrari', FALSE),
        (1, 1, 3, '2022-10-31T08:08:10.000Z', 'I have some questions about the car', FALSE),
        (1, 1, 3, '2022-10-31T08:17:15.000Z', 'Hi Corey, thank you. What else would you like to know?', TRUE),

        (2, 2, 1, '2019-02-01T10:45:30.000Z', 'Hi Bob, my name is Alice and I would like to buy your Lamborghini!', FALSE),
        (2, 2, 1, '2019-02-01T18:01:44.000Z', 'Alice, that is great to hear! We should meet up.', TRUE),

        (3, 3, 2, '2020-07-03T05:30:55.000Z', 'Hi Corey, Bob here. Lets talk about the Rolls-Royce!', FALSE),

        (4, 3, 9, '2020-07-03T05:30:55.000Z', 'Hi this is Isobel. Can you tell me about your Aston Martin?', FALSE),
        (4, 3, 9, '2020-07-04T05:30:55.000Z', 'Hi Isobel. Please call me at 780-555-1111. Thanks, Corey.', TRUE),

        (5, 3, 1, '2020-07-01T05:30:55.000Z', 'Hi, my name is Alice and I have a question about your Bugatti Chiron.', FALSE),
        (5, 3, 1, '2020-07-05T05:33:55.000Z', 'I am directing a commercial for a local business and we are looking for a luxury car to showcase in front of the store. Would you be open to making an arrangement like this? We will be able to compensate for your time.', FALSE),
        (5, 3, 1, '2020-07-08T07:30:55.000Z', 'Hi Alice. That sounds fun. Please share more details about your filming schedule.', TRUE),
        (5, 3, 1, '2020-07-10T08:01:55.000Z', 'Corey, that is amazing. We will be filming this Saturday in front of a salon downtown. We would only need you/the car on site from 1pm-1:30pm.', FALSE),
        (5, 3, 1, '2020-07-12T08:13:55.000Z', 'Hi Alice, I am available. Please email me at corey@bugattiboy.com so we can discuss payment.', TRUE),
        (5, 3, 1, '2020-08-01T08:15:55.000Z', 'Thank you! Chat soon!', FALSE),

        (5, 3, 10, '2020-08-01T05:30:55.000Z', 'Hi, my name is John. Lets talk about your Bugatti!', FALSE),

        (6, 4, 8, '2020-02-05T19:30:55.000Z', 'Hi, this is Harry Potter.', FALSE),
        (6, 4, 8, '2020-02-05T19:31:55.000Z', 'Is your Land Rover Evoque still available?', FALSE),
        (6, 4, 8, '2020-02-06T08:30:55.000Z', 'Please call me at 555-1234, thank you.', FALSE),
        (6, 4, 8, '2020-02-06T08:34:55.000Z', 'Hi Harry, will call you in a few minutes. Cheers.', TRUE),

        (6, 4, 9, '2020-07-03T07:30:55.000Z', 'Hi. Isobel here. Can we chat?', FALSE),

        (6, 4, 5, '2020-07-04T08:03:55.000Z', 'Hi, is the Land Rover available?', FALSE),
        (6, 4, 5, '2020-07-05T15:49:55.000Z', 'Are you flexible on the price?', FALSE),

        (6, 4, 6, '2020-07-06T11:22:55.000Z', 'Hello. I would like to test drive the Evoque. Thanks, Frank. 403-555-1234', FALSE),

        (8, 7, 4, '2020-07-03T05:30:55.000Z', 'Hi, I am contacting you about the 2018 G wagon. Can we arrange a time to meet?', FALSE),
        (8, 7, 4, '2020-07-03T06:30:55.000Z', 'Do you have more pictures of the car?', FALSE),
        (8, 7, 4, '2020-07-03T07:30:55.000Z', 'Thanks!', FALSE),
        (8, 7, 4, '2020-07-03T08:30:55.000Z', 'If its easier I can be reached at 250-444-1234', FALSE),
        (8, 7, 4, '2020-07-03T09:30:55.000Z', 'Hi Doug. Gayle here. Yes it is still available. Would love to set something up.', TRUE),
        (8, 7, 4, '2020-07-03T10:30:55.000Z', 'Its easier to reach me on here, but we can schedule something whenever you would like.', TRUE),
        (8, 7, 4, '2020-07-03T11:30:55.000Z', 'Okay, can we meet tomorrow?', FALSE),
        (8, 7, 4, '2020-07-03T12:30:55.000Z', 'Yes that works. I live near the Starbucks on main street. Would you like to meet there at 1pm tomorrow?', TRUE),
        (8, 7, 4, '2020-07-03T13:30:55.000Z', 'Yes Gayle, that works for me.', FALSE),
        (8, 7, 4, '2020-07-03T14:30:55.000Z', 'I will see you then.', FALSE),
        (8, 7, 4, '2020-07-03T15:30:55.000Z', 'Perfect. Chat soon.', TRUE),

        (8, 7, 5, '2020-07-04T10:30:55.000Z', 'Hi, I am interested in your Land Rover Evoque. Do you have time to discuss? Thanks. -Emily', FALSE),

        (9, 8, 6, '2020-07-03T05:30:55.000Z', 'Hi. Interested in the Tesla. Thanks. -Frank.', FALSE),

        (10, 8, 6, '2020-07-03T05:30:55.000Z', 'Hi. Interested in the G550. Thanks. -Frank.', FALSE);



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
