CREATE DATABASE IF NOT EXISTS fastTraveler;
USE fastTraveler;

CREATE TABLE `fastTraveler`.`User`(
    `id_user`       INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name_user`     VARCHAR(60),
    `lastName_user` VARCHAR(60),    
    `age_user`      SMALLINT,
    `email_user`    VARCHAR(60) NOT NULL UNIQUE,
    `password_user` VARCHAR(60) NOT NULL
);

INSERT INTO `fastTraveler`.`User` 
  (`name_user`, `lastName_user`, `age_user`, `email_user`, `password_user`) 
VALUES 
  ('Abdias', 'Gabriel', 25, 'correo@example.com', '123456789');
  
  SELECT * FROM `fastTraveler`.`User`;

CREATE TABLE `fastTraveler`.`Travel`(
    `id_travel`             INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `airline_travel`        VARCHAR(100),
    `flightNumber_travel`   VARCHAR(20),
    `origin_travel`         VARCHAR(50),
    `destination_travel`    VARCHAR(50),
    `departureDate_travel`  DATETIME,
    `arrivalDate_travel`    DATETIME,
    `price_travel`          DECIMAL(10,2),
    `duration_travel`       INT
);

CREATE TABLE `fastTraveler`.`Booking`(
    `id_booking`                INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `idUser_booking`            INT,
    `idOutboundFlight_booking`  INT,
    `idReturnFlight_booking`    INT,
    `reservationDate_booking`   DATE,
    `amountPeople_booking`      INT,
    FOREIGN KEY (`idUser_booking`) REFERENCES `fastTraveler`.`User`(`id_user`),
    FOREIGN KEY (`idOutboundFlight_booking`) REFERENCES `fastTraveler`.`Travel`(`id_travel`),
    FOREIGN KEY (`idReturnFlight_booking`) REFERENCES `fastTraveler`.`Travel`(`id_travel`)
);

CREATE TABLE `fastTraveler`.`Purchase`(
    `id_purchase`               INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `idUser_purchase`           INT,
    `idTravel_purchase`         INT,
    `purchaseDate_purchase`     DATETIME DEFAULT NOW(),
    `amount_purchase`           INT,
    `total_purchase`            DECIMAL(10,2),
    `paymentMethod_purchase`    VARCHAR(50),
    FOREIGN KEY (`idUser_purchase`) REFERENCES `fastTraveler`.`User`(`id_user`),
    FOREIGN KEY (`idTravel_purchase`) REFERENCES `fastTraveler`.`Travel`(`id_travel`)
);

/*-------------------STORED PROCEDURES-------------*/
-- Stored Procedure para agregar un usuario
DELIMITER $$
CREATE PROCEDURE `AddUser`(
    IN _name        VARCHAR(60),
    IN _lastName    VARCHAR(60),
    IN _email       VARCHAR(60),
    IN _password    VARCHAR(60),
    IN _age         SMALLINT
)
BEGIN
    INSERT INTO `fastTraveler`.`User` 
    (`name_user`, `lastName_user`, `email_user`, `password_user`, `age_user`)
    VALUES (_name, _lastName, _email, _password, _age);
END $$
DELIMITER ;

-- Stored Procedure para modificar un usuario
DELIMITER $$
CREATE PROCEDURE `ModifyUser`(
    IN _id          INT,
    IN _name        VARCHAR(60),
    IN _lastName    VARCHAR(60),
    IN _password    VARCHAR(60),
    IN _age         SMALLINT
)
BEGIN
    UPDATE `fastTraveler`.`User` 
    SET `name_user` = COALESCE(NULLIF(_name, NULL), `name_user`), 
        `lastName_user` = COALESCE(NULLIF(_lastName, NULL), `lastName_user`), 
        `password_user` = COALESCE(NULLIF(_password, NULL), `password_user`), 
        `age_user` = COALESCE(NULLIF(_age, NULL), `age_user`)
    WHERE id_user = _id;
END $$
DELIMITER ;

-- Stored Procedure para obtener un usuario por correo electrónico y contraseña
DELIMITER $$
CREATE PROCEDURE `GetUserByEmail`(
    IN _email       VARCHAR(60),
    IN _password    VARCHAR(60)
)
BEGIN
    SELECT * FROM `fastTraveler`.`User`
    WHERE `email_user` = _email AND `password_user` = _password;
END $$
DELIMITER ;

DROP PROCEDURE `GetUserByID`
-- Stored Procedure para obtener un usuario por ID
DELIMITER $$
CREATE PROCEDURE `GetUserByID`(
    IN _userID INT
)
BEGIN
    SELECT * FROM `fastTraveler`.`User`
    WHERE `id_user` = _userID;
END $$
DELIMITER ;


-- Stored Procedure para agregar un viaje
DELIMITER $$
CREATE PROCEDURE `AddTravel`(
    IN _airline         VARCHAR(100),
    IN _flightNumber    VARCHAR(20),
    IN _origin          VARCHAR(50),
    IN _destination     VARCHAR(50),
    IN _departureDate   DATETIME,
    IN _arrivalDate     DATETIME,
    IN _price           DECIMAL(10,2),
    IN _duration        INT
)
BEGIN
    INSERT INTO `fastTraveler`.`Travel`
     (`airline_travel`, `flightNumber_travel`, `origin_travel`, `destination_travel`, 
     `departureDate_travel`, `arrivalDate_travel`, `price_travel`, `duration_travel`)
    VALUES (_airline, _flightNumber, _origin, _destination, 
    _departureDate, _arrivalDate, _price, _duration);
END $$
DELIMITER ;

-- Stored Procedure para modificar un viaje
DELIMITER $$
CREATE PROCEDURE `ModifyTravel`(
    IN _travelID        INT,
    IN _airline         VARCHAR(100),
    IN _flightNumber    VARCHAR(20),
    IN _origin          VARCHAR(50),
    IN _destination     VARCHAR(50),
    IN _departureDate   DATETIME,
    IN _arrivalDate     DATETIME,
    IN _price           DECIMAL(10,2),
    IN _duration        INT
)
BEGIN
    UPDATE `fastTraveler`.`Travel`
    SET `airline_travel` = COALESCE(NULLIF(_airline, NULL), `airline_travel`), 
        `flightNumber_travel` = COALESCE(NULLIF(_flightNumber, NULL), `flightNumber_travel`),
        `origin_travel` = COALESCE(NULLIF(_origin, NULL), `origin_travel`),
        `destination_travel` = COALESCE(NULLIF(_destination, NULL), `destination_travel`),
        `departureDate_travel` = COALESCE(NULLIF(_departureDate, NULL), `departureDate_travel`),
        `arrivalDate_travel` = COALESCE(NULLIF(_arrivalDate, NULL), `arrivalDate_travel`),
        `price_travel` = COALESCE(NULLIF(_price, NULL), `price_travel`),
        `duration_travel` = COALESCE(NULLIF(_duration, NULL), `duration_travel`)
    WHERE `id_travel` = _travelID;
END $$
DELIMITER ;

-- Stored Procedure para eliminar un viaje por ID
DELIMITER $$
CREATE PROCEDURE `DeleteTravelByID`(
    IN _travelID INT
)
BEGIN
    DELETE FROM `fastTraveler`.`Travel`
    WHERE `id_travel` = _travelID;
END $$
DELIMITER ;

-- Stored Procedure para obtener un viaje por ID
DELIMITER $$
CREATE PROCEDURE `GetTravelByID`(
    IN _travelID INT
)
BEGIN
    SELECT * FROM `fastTraveler`.`Travel`
    WHERE `id_travel` = _travelID;
END $$
DELIMITER ;


-- Stored Procedure para agregar una reserva
DELIMITER $$
CREATE PROCEDURE `AddBooking`(
    IN _userID              INT,
    IN _outboundFlightID    INT,
    IN _returnFlightID      INT,
    IN _reservationDate     DATE,
    IN _amountPeople        INT
)
BEGIN
    INSERT INTO `fastTraveler`.`Booking` 
    (`idUser_booking`, `idOutboundFlight_booking`, `idReturnFlight_booking`, 
    `reservationDate_booking`, `amountPeople_booking`)
    VALUES (_userID, _outboundFlightID, _returnFlightID, _reservationDate, _amountPeople);
END $$
DELIMITER ;

-- Stored Procedure para obtener una reserva por ID
DELIMITER $$
CREATE PROCEDURE `GetBookingByID`(
    IN _bookingID INT
)
BEGIN
    SELECT * FROM `fastTraveler`.`Booking`
    WHERE `id_booking` = _bookingID;
END $$
DELIMITER ;

-- Stored Procedure para obtener todas las reservas
DELIMITER $$
CREATE PROCEDURE `GetAllBookings`()
BEGIN
    SELECT * FROM `fastTraveler`.`Booking`;
END $$
DELIMITER ;