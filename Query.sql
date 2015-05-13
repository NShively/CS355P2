use nshively;

DROP TABLE IF EXISTS TGames CASCADE;
DROP TABLE IF EXISTS TMusic CASCADE;
DROP TABLE IF EXISTS TMovies CASCADE;
DROP TABLE IF EXISTS TUsers CASCADE;


CREATE TABLE TMovies(MovieID INT PRIMARY KEY AUTO_INCREMENT, Title varchar(100) UNIQUE,  Director varchar(100), Genre varchar(100));
CREATE TABLE TGames(GameID INT PRIMARY KEY AUTO_INCREMENT, Title varchar(100) UNIQUE,  Producer varchar(100), Genre varchar(100));
CREATE TABLE TMusic(MusicID INT PRIMARY KEY AUTO_INCREMENT, Title varchar(100) UNIQUE,  Composer varchar(100), Genre varchar(100));
CREATE TABLE TUsers(UserID int PRIMARY KEY AUTO_INCREMENT, Username varchar(100) UNIQUE);
CREATE TABLE MovieRate(MovieID int, Rating int, UserID int, foreign key(MovieID) references TMovies(MovieID), foreign key (UserID) references TUsers(UserID), PRIMARY KEY(MovieID, UserID));
CREATE TABLE GameRate(GameID int, Rating int, UserID int, foreign key(GameID) references TGames(GameID), foreign key (UserID) references TUsers(UserID), PRIMARY KEY(GameID, UserID));
CREATE TABLE MusicRate(MusicID int, Rating int, UserID int, foreign key(MusicID) references TMusic(MusicID), foreign key (UserID) references TUsers(UserID), PRIMARY KEY(MusicID, UserID));

