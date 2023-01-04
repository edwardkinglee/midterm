INSERT INTO cars (lister_id, year, make, model, color, description, price, photo, timestamp, body_type, kms)
 VALUES (1, 2022, 'Ferrari', 'F8 Spider', 'Red', 'Automatic, 8-Cylinder, Rwd', 589995, 'https://img.jamesedition.com/listing_images/2022/11/29/16/36/47/2db645aa-7eac-4933-9c1b-0b39810f1f5a/je/1900xxs.jpg', '2022-10-30T17:46:30.297Z', 'convertible', 412),
        (2, 2016, 'Lamborghini', 'Aventador', 'Red', 'Automatic, 12-Cylinder, Rwd', 610000, 'https://img.jamesedition.com/listing_images/2022/12/07/11/04/13/9840c077-4609-4fd3-bc3d-b632359093a5/je/1900xxs.jpg', '2019-01-15T18:59:30.000Z', 'convertible', 7334),
        (3, 2018, 'Rolls-Royce', 'Ghost', 'White', 'Automatic, 12-Cylinder, Rwd', 600000, 'https://img.jamesedition.com/listing_images/2020/10/02/15/43/03/a1d9837f-2001-4048-b67d-d524ee1c7a54/je/1900xxs.jpg', '2020-07-03T01:30:55.000Z', 'sedan', 6985),
        (3, 2021, 'Aston Martin', 'DB11', 'Blue', 'Automatic, 8-Cylinder, Rwd', 268000, 'https://img.jamesedition.com/listing_images/2022/09/14/15/18/56/37ba23c9-d17f-499d-962d-4becaeb537a9/je/1900xxs.jpg', '2020-07-01T12:01:55.000Z', 'coupe', 5300),
        (3, 2018, 'Bugatti', 'Chiron', 'Red', 'Dual Clutch, 16-Cylinder, Awd', 4900000, 'https://img.jamesedition.com/listing_images/2022/11/16/17/16/20/9e36713f-0951-4102-8d39-a46f4e41d0dd/je/1900xxs.jpg', '2020-06-09T15:56:55.000Z', 'coupe', 3000),
        (4, 2020, 'Land Rover', 'Evoque', 'White', 'Automatic, 4-Cylinder, Awd', 74100, 'https://cdn.jdpower.com/ArticleImages/2020%20Land%20Rover%20Range%20Rover%20Evoque%20rrevq20mystaticnd22111810%20730.jpg', '2020-02-02T05:30:55.000Z','suv', 4500),
        (5, 2023, 'Cadillac', 'Lyriq', 'Grey', 'electric!', 77000, 'https://cdn.motor1.com/images/mgl/6ZpKv7/s3/cadillac-lyriq.jpg', '2020-04-02T14:32:55.000Z', 'wagon', 15),
        (7, 2018, 'Mercedes-Benz', 'G-Class', 'Black', 'boxy', 125000, 'https://i.pinimg.com/originals/a5/2f/6e/a52f6ea1922573332a21a1d4e1d03481.jpg', '2020-07-02T04:04:55.000Z', 'suv', 17000),
        (8, 2025, 'Tesla', 'Cybertruck', 'Other', 'where did I even buy this?', 125000, 'https://electrek.co/wp-content/uploads/sites/3/2022/06/Tesla-Cybertruck-Moss-Landing-KSBW-Jerrett-Knapp-1.jpg?quality=82&strip=all&w=1600', '2020-01-23T05:30:55.000Z', 'truck', 0),
        (7, 2017, 'Mercedes Benz', 'G550 Squared', 'White', 'Automatic, 8-Cylinder, AWD', 298000, 'https://img.jamesedition.com/listing_images/2019/01/08/19/17/45/ad6bdf7d-4001-4743-8f4c-449aef19004f/je/1100xxs.jpg', '2020-02-27T05:30:55.000Z', 'suv', 4000),
        (8, 2019, 'Ferrari', 'GTC4 Lusso', 'Red', 'Automatic, 8-Cylinder, Rwd', 240000, 'https://d2blhp03rkvfi4.cloudfront.net/cache/width_916/car/car-18546/photo/2019-Ferrari-GTC4Lusso-249988-1560814567.jpg', '2020-02-27T05:30:55.000Z', 'hatchback', 8000),
        (2, 1965, 'Citroen', 'F-Van', 'Silver', 'Manual, 4-Cylinder, Awd', 67900, 'https://img.jamesedition.com/listing_images/2019/12/13/08/16/08/596dfb58-e142-42c4-b11b-b85b31e7a4e2/je/1900xxs.jpg', '2020-02-27T05:30:55.000Z', 'minivan', 54000),
        (8, 2019, 'Jaguar', 'F-Type R', 'White', 'beep beep', 125000, 'https://cdn.carbuzz.com/gallery-images/840x560/639000/200/639225.jpg', '2020-02-27T05:30:55.000Z', 'coupe', 14000);


-- user: 1 => listed car: 1
-- user: 2 => listed car: 2
-- user: 3 => listed car: 3, 4, 5
-- user: 4 => listed car: 6
-- user: 5 => listed car: 7
-- user: 7 => listed car: 8
-- user: 8 => listed car: 9, 10
