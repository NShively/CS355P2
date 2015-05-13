var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('select * from Movies',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetAll2 = function(callback) {
    connection.query('select * from Users',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
    connection.query('select * from Movies',
        function (err, resul) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(resul);
            callback(false, resul);
        }
    );
}

exports.GetAllView = function(callback) {
    //CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select MovieID, Title from Movies',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetAllView3 = function(callback) {
    //CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('Select DISTINCT MovieID, MRID(MovieID) AS AvgRating from MoviesRatingsView',
    function (err, result2) {
        if(err) {
            console.log(err);
            callback(true);
            return;
        }
        callback(false, result2);
    }
    );

}

exports.GetAllView = function(callback) {
    //CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select MovieID, Title from Movies',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetAllView2 = function(callback) {
    //CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select UserID, Username from Users',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetByID = function(studentid, callback) {
    console.log(studentid);
    var query = 'select * from Movies WHERE MovieID=' + studentid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetRating = function(studentid, callback) {
    var query2 = 'CALL MBAR(' + studentid +')';
    console.log(query2);
    connection.query(query2,
        function (err, result2) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result2[0]);
            callback(false, result2);
        }
    );
}

exports.Insert = function(student_info, callback) {
    console.log(student_info);
    var query = 'INSERT INTO Movies (Title, Genre, City, State, Country) VALUES (\'' + student_info.Title + '\', \'' + student_info.Genre + '\', \'' + student_info.City + '\', \'' + student_info.State + '\', \'' + student_info.Country + '\' )';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}


exports.GetByID2 = function(studentid, callback) {
    console.log(studentid);
    var query = 'select * from Users WHERE UserID=' + studentid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetByID3 = function(studentid, callback) {
    console.log(studentid);
    var query = 'select * from Ratings WHERE RatingID=' + studentid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.Insert2 = function(student_info, callback) {
    console.log(student_info);
    var query = 'INSERT INTO Users(Username, FirstName, LastName) VALUES (\'' + student_info.Username + '\', \'' + student_info.FirstName + '\', \'' + student_info.LastName + '\' )';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.Insert3 = function(student_info, callback) {
    console.log(student_info);
    var query = 'INSERT INTO Ratings(UserID, MovieID, Rating) VALUES (\'' + student_info.UserID + '\', \'' + student_info.MovieID + '\', \'' + student_info.Rating + '\' )';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if (err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}



    /////////////////////// proj starts here //////////////////////

exports.GetMovByID = function(movieid, callback) {
    console.log(movieid);
    var query = 'select * from TMovies WHERE MovieID=' + movieid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetGByID = function(gid, callback) {
    console.log(gid);
    var query = 'select * from TGames WHERE GameID=' + gid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetMuByID = function(mid, callback) {
    console.log(mid);
    var query = 'select * from TMusic WHERE MusicID=' + mid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}





    exports.InsertMov = function(mov_info, callback) {
        console.log(mov_info);
        var query = 'INSERT INTO TMovies(Title, Director, Genre) VALUES (\'' + mov_info.Title + '\', \'' + mov_info.Director + '\', \'' + mov_info.Genre + '\' )';
        console.log(query);
        connection.query(query,
            function (err, result) {
                if (err) {
                    console.log(err);
                    callback(true);
                    return
                }
                callback(false, result);
            }
        );
    }

exports.InsertG = function(g_info, callback) {
    console.log(g_info);
    var query = 'INSERT INTO TGames(Title, Producer, Genre) VALUES (\'' + g_info.Title + '\', \'' + g_info.Producer + '\', \'' + g_info.Genre + '\' )';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if (err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.InsertMu = function(mu_info, callback) {
    console.log(mu_info);
    var query = 'INSERT INTO TMusic(Title, Composer, Genre) VALUES (\'' + mu_info.Title + '\', \'' + mu_info.Composer + '\', \'' + mu_info.Genre + '\' )';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if (err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.InsertUser = function(u_info, callback) {
    console.log(u_info);
    var query = 'INSERT INTO TUsers(Username) VALUES (\'' + u_info.Username + '\' )';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if (err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.InsertMovR = function(mov_info, callback) {
    console.log(mov_info);
    var query = 'INSERT INTO MovieRate(MovieID, Rating, UserID) VALUES (' + mov_info.MovieID + ', ' + mov_info.Rating + ', ' + mov_info.UserID + ')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if (err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}


exports.InsertGR = function(g_info, callback) {
    console.log(g_info);
    var query = 'INSERT INTO GameRate(GameID, Rating, UserID) VALUES (' + g_info.GameID + ', ' + g_info.Rating + ', ' + g_info.UserID + ')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if (err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}


exports.InsertMuR = function(mu_info, callback) {
    console.log(mu_info);
    var query = 'INSERT INTO MusicRate(MusicID, Rating, UserID) VALUES (' + mu_info.MusicID + ', ' + mu_info.Rating + ', ' + mu_info.UserID + ')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if (err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}






exports.GetMovs = function(callback) {
    //CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select MovieID, Title from TMovies',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetGs = function(callback) {
    //CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select GameID, Title from TGames',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetMu = function(callback) {
    //CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select MusicID, Title from TMusic',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetU = function(callback) {
    //CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select * from TUsers',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetMuR = function(callback) {
    //CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select * from MusicRatingView',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetMovR = function(callback) {
    //CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select * from MoviesRatingView',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetGR = function(callback) {
    //CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select * from GamesRatingView',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetAllMov = function(callback) {
    connection.query('select * from TMovies',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetAllG= function(callback) {
    connection.query('select * from TGames',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetAllMu = function(callback) {
    connection.query('select * from TMusic',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetMovRByID1 = function(movieid, callback) {
    console.log(movieid);
    var query = 'select * from MoviesRatingsView WHERE RatingID=' + movieid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetMuRByID1 = function(movieid, callback) {
    console.log(movieid);
    var query = 'select * from MusicRatingsView WHERE RatingID=' + movieid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetGRByID1 = function(movieid, callback) {
    console.log(movieid);
    var query = 'select * from GamesRatingsView WHERE RatingID=' + movieid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetUbyID = function(movieid, callback) {
    console.log(movieid);
    var query = 'select * from TUsers WHERE UserID=' + movieid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetAllU= function(callback) {
    connection.query('select * from TGames',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}


exports.GetAllMuR= function(callback) {
    connection.query('select * from MusicRatingsView',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetAllGR= function(callback) {
    connection.query('select * from GamesRatingsView',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetAllMovR= function(callback) {
    connection.query('select * from MoviesRatingsView',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetAvgMov = function(callback) {
    //CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('Select DISTINCT MovieID, Title, MRID(MovieID) AS AvgRating from MoviesRatingsView',
        function (err, result2) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result2);
        }
    );

}

exports.GetAvgG = function(callback) {
    //CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('Select DISTINCT GameID, Title, GRID(GameID) AS AvgRating from GamesRatingsView',
        function (err, result2) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result2);
        }
    );

}

exports.GetAvgMu = function(callback) {
    //CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('Select DISTINCT MusicID, Title, MuRID(MusicID) AS AvgRating from MusicRatingsView',
        function (err, result2) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result2);
        }
    );

}