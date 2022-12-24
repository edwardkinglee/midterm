INSERT INTO cars (lister_id, year, make, model, color, description, price, photo, timestamp, body_type)
 VALUES (1, 2010, 'Ferrari', 'F8 Spider', 'yellow', 'Its fast', 150000, 'https://car-images.bauersecure.com/wp-images/3639/ferrari_f8_spider_66.jpg', '2022-10-30T17:46:30.297Z', 'convertible'),
        (2, 2015, 'Lamborghini', 'Aventador', 'red', 'Its cool', 125000, 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg', '2019-01-15T18:59:30.000Z', 'coupe'),
        (3, 2019, 'Rolls-Royce', 'Phantom', 'grey', 'Its fancy', 125000, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/2019_Rolls-Royce_Phantom_V12_Automatic_6.75.jpg/1200px-2019_Rolls-Royce_Phantom_V12_Automatic_6.75.jpg', '2020-07-03T01:30:55.000Z', 'sedan'),
        (3, 2021, 'Aston Martin', 'Vantage', 'grey', 'Vroom vroom', 125000, 'https://amsc-prod-cd.azureedge.net/-/media/aston-martin/images/default-source/models/new-vantage/new/amf1-performance2.jpg', '2020-07-01T12:01:55.000Z', 'coupe'),
        (3, 2017, 'Bugatti', 'Chiron', 'blue', 'Fancy!', 125000, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Bugatti_Chiron_%2836559710091%29.jpg/1200px-Bugatti_Chiron_%2836559710091%29.jpg', '2020-06-09T15:56:55.000Z', 'coupe'),
        (4, 2020, 'Land Rover', 'Evoque', 'white', 'sturdy', 125000, 'https://cdn.jdpower.com/ArticleImages/2020%20Land%20Rover%20Range%20Rover%20Evoque%20rrevq20mystaticnd22111810%20730.jpg', '2020-02-02T05:30:55.000Z','suv'),
        (5, 2023, 'Cadillac', 'Lyriq', 'grey', 'electric!', 125000, 'https://cdn.motor1.com/images/mgl/6ZpKv7/s3/cadillac-lyriq.jpg', '2020-04-02T14:32:55.000Z', 'wagon'),
        (7, 2018, 'Mercedes-Benz', 'G-Class', 'black', 'boxy', 125000, 'https://i.pinimg.com/originals/a5/2f/6e/a52f6ea1922573332a21a1d4e1d03481.jpg', '2020-07-02T04:04:55.000Z', 'suv'),
        (8, 2025, 'Tesla', 'Cybertruck', 'chrome', 'where did I even buy this?', 125000, 'https://electrek.co/wp-content/uploads/sites/3/2022/06/Tesla-Cybertruck-Moss-Landing-KSBW-Jerrett-Knapp-1.jpg?quality=82&strip=all&w=1600', '2020-01-23T05:30:55.000Z', 'truck'),
        (8, 2019, 'Jaguar', 'F-Type R', 'white', 'beep beep', 125000, 'https://cdn.carbuzz.com/gallery-images/840x560/639000/200/639225.jpg', '2020-02-27T05:30:55.000Z', 'coupe');


-- user: 1 => listed car: 1
-- user: 2 => listed car: 2
-- user: 3 => listed car: 3, 4, 5
-- user: 4 => listed car: 6
-- user: 5 => listed car: 7
-- user: 7 => listed car: 8
-- user: 8 => listed car: 9, 10
