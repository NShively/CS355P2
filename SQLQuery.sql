use nshively;


DROP TABLE IF EXISTS MovieRate;
DROP TABLE IF EXISTS GameRate;
DROP TABLE IF EXISTS MusicRate;

DROP TABLE IF EXISTS TGames CASCADE;
DROP TABLE IF EXISTS TMusic CASCADE;
DROP TABLE IF EXISTS TMovies CASCADE;
DROP TABLE IF EXISTS TUsers CASCADE;

CREATE TABLE TMovies(MovieID INT PRIMARY KEY AUTO_INCREMENT, Title varchar(100) UNIQUE,  Director varchar(100), Genre varchar(100));
CREATE TABLE TGames(GameID INT PRIMARY KEY AUTO_INCREMENT, Title varchar(100) UNIQUE,  Producer varchar(100), Genre varchar(100));
CREATE TABLE TMusic(MusicID INT PRIMARY KEY AUTO_INCREMENT, Title varchar(100) UNIQUE,  Composer varchar(100), Genre varchar(100));
CREATE TABLE TUsers(UserID int PRIMARY KEY AUTO_INCREMENT, Username varchar(100) UNIQUE);
CREATE TABLE MovieRate(RatingID INT PRIMARY KEY AUTO_INCREMENT, MovieID int, Rating int, UserID int, foreign key(MovieID) references TMovies(MovieID) ON DELETE CASCADE ON UPDATE CASCADE, foreign key (UserID) references TUsers(UserID) ON DELETE CASCADE ON UPDATE CASCADE, UNIQUE(MovieID, UserID));
CREATE TABLE GameRate(RatingID INT PRIMARY KEY AUTO_INCREMENT, GameID int, Rating int, UserID int, foreign key(GameID) references TGames(GameID) ON DELETE CASCADE ON UPDATE CASCADE, foreign key (UserID) references TUsers(UserID) ON DELETE CASCADE ON UPDATE CASCADE, UNIQUE(GameID, UserID));
CREATE TABLE MusicRate(RatingID INT PRIMARY KEY AUTO_INCREMENT, MusicID int, Rating int, UserID int, foreign key(MusicID) references TMusic(MusicID) ON DELETE CASCADE ON UPDATE CASCADE, foreign key (UserID) references TUsers(UserID) ON DELETE CASCADE ON UPDATE CASCADE, UNIQUE(MusicID, UserID));


INSERT INTO TMovies (Title, Director, Genre) Values ('Face Off', 'SomeDude', 'Action/Comedy');
INSERT INTO TMovies (Title, Director, Genre) Values ('MovieName1', 'John Johnson', 'TestGenre');
INSERT INTO TMovies (Title, Director, Genre) Values ('Starwars', 'George Lucas', 'SciFi/Fantasy');
INSERT INTO TMovies (Title, Director, Genre) Values ('Cabin', 'Frank Jones', 'Action');
INSERT INTO TGames (Title, Producer, Genre) Values ('Half-Life', 'Gaben', 'FPS');
INSERT INTO TGames (Title, Producer, Genre) Values ('Portal', 'Gaben', 'FPS/Puzzle');
INSERT INTO TGames (Title, Producer, Genre) Values ('Starcraft2', 'Blizzard', 'RTS');

INSERT INTO TMusic (Title, Composer, Genre) Values ('Miracles', 'Insane Clown Posse', 'Rap?');
INSERT INTO TMusic (Title, Composer, Genre) Values ('MustaKraken', 'Dethklok', 'Heavy Metal');
INSERT INTO TMusic (Title, Composer, Genre) Values ('TestSong', 'Stuff', 'Gen');

Insert into TUsers (Username) Values ('4k');
Insert into TUsers (Username) Values ('Nick');
Insert into TUsers (Username) Values ('3ty3ree');

Insert into MovieRate(UserID, Rating, MovieID) Values (1, 3, 1);
Insert into MovieRate(UserID, Rating, MovieID) Values (2, 1, 1);
Insert into MovieRate(UserID, Rating, MovieID) Values (3, 5, 1);

Insert into GameRate(UserID, Rating, GameID) Values (1, 4, 1);
Insert into GameRate(UserID, Rating, GameID) Values (2, 5, 1);
Insert into GameRate(UserID, Rating, GameID) Values (3, 5, 1);

Insert into MusicRate(UserID, Rating, MusicID) Values (1, 2, 1);
Insert into MusicRate(UserID, Rating, MusicID) Values (2, 5, 1);
Insert into MusicRate(UserID, Rating, MusicID) Values (3, 1, 1);

DROP VIEW IF EXISTS MoviesRatingsView; 
CREATE VIEW MoviesRatingsView AS 
SELECT m.Title, m.MovieID, r.Rating, r.RatingID, u.Username, u.UserID FROM TMovies m 
LEFT JOIN MovieRate r ON r.MovieID = m.MovieID 
JOIN TUsers u ON u.UserID = r.UserID;
SELECT * from MoviesRatingsView;

DROP VIEW IF EXISTS GamesRatingsView; 
CREATE VIEW GamesRatingsView AS 
SELECT m.Title, r.Rating, u.Username, m.GameID, r.RatingID, u.UserID FROM TGames m 
LEFT JOIN GameRate r ON r.GameID = m.GameID 
JOIN TUsers u ON u.UserID = r.UserID;
SELECT * from GamesRatingsView;

DROP VIEW IF EXISTS MusicRatingsView; 
CREATE VIEW MusicRatingsView AS 
SELECT m.Title, r.Rating, r.RatingID, u.UserID, m.MusicID, u.Username FROM TMusic m 
LEFT JOIN MusicRate r ON r.MusicID = m.MusicID 
JOIN TUsers u ON u.UserID = r.UserID;
SELECT * from MusicRatingsView;



DROP FUNCTION IF EXISTS MRID;
DELIMITER //
CREATE FUNCTION MRID(_MovieID INT) RETURNS DOUBLE
BEGIN
 DECLARE AvgRatin DOUBLE;
 SELECT AVG(Rating) AS AvgRating FROM MoviesRatingsView WHERE MovieID = _MovieID INTO AvgRatin;
 RETURN AvgRatin;
END //
DELIMITER ;

DROP FUNCTION IF EXISTS GRID;
DELIMITER //
CREATE FUNCTION GRID(_GameID INT) RETURNS DOUBLE
BEGIN
 DECLARE AvgRatin DOUBLE;
 SELECT AVG(Rating) AS AvgRating FROM GamesRatingsView WHERE GameID = _GameID INTO AvgRatin;
 RETURN AvgRatin;
END //
DELIMITER ;


DROP FUNCTION IF EXISTS MuRID;
DELIMITER //
CREATE FUNCTION MuRID(_MusicID INT) RETURNS DOUBLE
BEGIN
 DECLARE AvgRatin DOUBLE;
 SELECT AVG(Rating) AS AvgRating FROM MusicRatingsView WHERE MusicID = _MusicID INTO AvgRatin;
 RETURN AvgRatin;
END //
DELIMITER ;

SELECT MovieID, MRID(MovieID) FROM MoviesRatingsView;

SELECT * FROM TMovies;