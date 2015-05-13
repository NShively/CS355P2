/**
 * Created by Action Johnny on 5/11/2015.
 */
var express = require('express');
var router  = express.Router();
var db   = require('../models/db');



////////////////////////////////////////////////




router.get('/TUsers/all', function (req, res) {
    db.GetAllU(function (err, result) {
            if (err) throw err;
            res.render('displayTUsersTable.ejs', {rs: result});
        }
    );
});




router.get('/TUsers/create', function(req, res){
    res.render('createTUserForm.ejs', {action: '/TUsers/create'});
});





router.post('/TUsers/create', function (req, res) {
    db.InsertUser( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                db.GetUbyID(result.insertId, function(err, result){

                    res.render('displayTUserInfoSnippet.ejs', {rs: result, movieid: result.insertId});

                });
            }
            else {
                res.send('User was not inserted.');
            }
        }
    );
});



/////////////////////////////////////////////


router.get('/TMovies/all', function (req, res) {
    db.GetAllMov(function (err, result) {
            if (err) throw err;
            res.render('displayMoviesTable.ejs', {rs: result});
        }
    );
});

router.get('/TMovies', function (req, res) {
    if(req.query.movieid == null) {
        res.redirect('/TMovies/all');
    }
    else {
        db.GetMovByID(req.query.movieid, function (err, result) {
                if (err) throw err;

                // Send result to the template along with the original student id in case there were no results
                res.render('displayMovieInfo.ejs', {rs: result, movieid: req.query.movieid});

            }
        );
    }
});


router.get('/TMovies/create', function(req, res){
    res.render('createMovieForm.ejs', {action: '/TMovies/create'});
});





router.post('/TMovies/create', function (req, res) {
    db.InsertMov( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                db.GetMovByID(result.insertId, function(err, result){

                    res.render('displayMovieInfoSnippet.ejs', {rs: result, movieid: result.insertId});

                });
            }
            else {
                res.send('Movie was not inserted.');
            }
        }
    );
});

router.get('/TMovies/dropdown', function (req, res) {
    db.GetU(function (err, result) {
            if (err) throw err;
            db.GetMovs(function (err, res2)
            {
                if (err) throw err;
                res.render('displayMovieDropdown.ejs', {rs: result, r2: res2});
            });
        }
    );
});


router.post('/TMovies/dropdown', function (req, res) {
    db.InsertMovR( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                db.GetMovRByID1(result.insertId, function(err, result){

                    res.render('displayRatingInfoSnippet.ejs', {rs: result, movieid: result.insertId});

                });
            }
            else {
                res.send('Rating was not inserted.');
            }
        }
    );
});

router.get('/TMovies/ratings', function (req, res) {
    db.GetAllMovR(function (err, result) {
            if (err) throw err;
            res.render('displayMoviesRTable.ejs', {rs: result});
        }
    );
});




//

router.get('/TGames/all', function (req, res) {
    db.GetAllG(function (err, result) {
            if (err) throw err;
            res.render('displayGamesTable.ejs', {rs: result});
        }
    );
});

router.get('/TGames', function (req, res) {
    if(req.query.gameid == null) {
        res.redirect('/TGames/all');
    }
    else {
        db.GetGByID(req.query.gameid, function (err, result) {
                if (err) throw err;

                // Send result to the template along with the original student id in case there were no results
                res.render('displayGameInfo.ejs', {rs: result, gameid: req.query.gid});

            }
        );
    }
});


router.get('/TGames/create', function(req, res){
    res.render('createGameForm.ejs', {action: '/TGames/create'});
});





router.post('/TGames/create', function (req, res) {
    db.InsertG( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                db.GetGByID(result.insertId, function(err, result){

                    res.render('displayGameInfoSnippet.ejs', {rs: result, gameid: result.insertId});

                });
            }
            else {
                res.send('Game was not inserted.');
            }
        }
    );
});

router.get('/TGames/dropdown', function (req, res) {
    db.GetU(function (err, result) {
            if (err) throw err;
            db.GetGs(function (err, res2)
            {
                if (err) throw err;
                res.render('displayGameDropdown.ejs', {rs: result, r2: res2});
            });
        }
    );
});


router.post('/TGames/dropdown', function (req, res) {
    db.InsertGR( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                db.GetGRByID1(result.insertId, function(err, result){

                    res.render('displayGRatingInfoSnippet.ejs', {rs: result, gameid: result.insertId});

                });
            }
            else {
                res.send('Rating was not inserted.');
            }
        }
    );
});

router.get('/TGames/ratings', function (req, res) {
    db.GetAllGR(function (err, result) {
            if (err) throw err;
            res.render('displayGamesRTable.ejs', {rs: result});
        }
    );
});

//

router.get('/TMusic/all', function (req, res) {
    db.GetAllMu(function (err, result) {
            if (err) throw err;
            res.render('displayMusicTable.ejs', {rs: result});
        }
    );
});

router.get('/TMusic', function (req, res) {
    if(req.query.musicid == null) {
        res.redirect('/TMusic/all');
    }
    else {
        db.GetMuByID(req.query.musicid, function (err, result) {
                if (err) throw err;

                // Send result to the template along with the original student id in case there were no results
                res.render('displayMusicInfo.ejs', {rs: result, musicid: req.query.musicid});

            }
        );
    }
});


router.get('/TMusic/create', function(req, res){
    res.render('createMusicForm.ejs', {action: '/TMusic/create'});
});





router.post('/TMusic/create', function (req, res) {
    db.InsertMu(req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if (typeof result.insertId !== 'undefined') {
                db.GetMuByID(result.insertId, function (err, result) {

                    res.render('displayMusicInfoSnippet.ejs', {rs: result, musicid: result.insertId});

                });
            }
            else {
                res.send('Music was not inserted.');
            }
        }
    );
});


router.get('/TMusic/dropdown', function (req, res) {
    db.GetU(function (err, result) {
            if (err) throw err;
            db.GetMu(function (err, res2)
            {
                if (err) throw err;
                res.render('displayMusicDropdown.ejs', {rs: result, r2: res2});
            });
        }
    );
});


router.post('/TMusic/dropdown', function (req, res) {
    db.InsertMuR( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                db.GetMuRByID1(result.insertId, function(err, result){

                    res.render('displayGRatingInfoSnippet.ejs', {rs: result, gameid: result.insertId});

                });
            }
            else {
                res.send('Rating was not inserted.');
            }
        }
    );
});

router.get('/TMusic/ratings', function (req, res) {
    db.GetAllMuR(function (err, result) {
            if (err) throw err;
            res.render('displayMusicRTable.ejs', {rs: result});
        }
    );
});

/////

router.get('/TMusic/avgratings', function (req, res) {
    db.GetAvgMu(function (err, result) {
            if (err) throw err;
            res.render('displayAvgMuRating.ejs', {rs: result});
        }
    );
});

router.get('/TMovies/avgratings', function (req, res) {
    db.GetAvgMov(function (err, result) {
            if (err) throw err;
            res.render('displayAvgMovRating.ejs', {rs: result});
        }
    );
});

router.get('/TGames/avgratings', function (req, res) {
    db.GetAvgG(function (err, result) {
            if (err) throw err;
            res.render('displayAvgGRating.ejs', {rs: result});
        }
    );
});

router.get('/About', function (req, res) {

            res.render('About.ejs', {});

});

//////////////////////////////////////////////////////////////////////////


module.exports = router;