/*
    This is our back-end API. It provides all the data services
    our database needs. Note that this file contains the controller
    functions for each endpoint for movies
    
    @author Andy Yang
*/

const Movie = require('../models/Movie')
//const CryptoJs = require("crypto-js");
const bcrypt = require("bcryptjs");
const auth = require("../auth.js/index.js");

createMovie = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            errorMessage: 'Improperly formatted request',
        })
    }

    if(req.user.isAdmin){
        const newMovie = new Movie(body);
        console.log("creating movie: " + JSON.stringify(newMovie));
        if (!newMovie) {
            return res.status(400).json({
                errorMessage: 'Improperly formatted request',
            })
        }

        try{
            const savedMovie = await newMovie.save();
            console.log("new movie saved: " + savedMovie._id);
            res.status(200).json(savedMovie); 
        }
        catch (err) {
            console.error(err);
            res.status(500).send();
        }

    }
    else{
        res.status(403).json({errorMessage: "You're not allowed to create movies"});
    }
}

updateMovie = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            errorMessage: 'You must provide a body to update movie',
        })
    }

    if(req.user.isAdmin){
        try{
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}); //update first, then return new movie 
            console.log("movie updated: " + updatedMovie._id);
            res.status(200).json(updatedMovie); 
        }
        catch (err) {
            console.error(err);
            res.status(500).send();
        }

    }
    else{
        res.status(403).json({errorMessage: "You're not allowed to update movies"});
    }
}

deleteMovie = async (req, res) => {
    console.log("delete movie with id: " + JSON.stringify(req.params.id));
    Movie.findById({ _id: req.params.id }, (err, movie) => {
        console.log("Movie found: " + JSON.stringify(movie));
        if (err) {
            return res.status(404).json({
                errorMessage: 'Movie not found!',
            })
        }

        async function asyncCheckIsAdmin(){
            if(req.user.isAdmin){
                try{
                    const deletedMovie = await Movie.findByIdAndDelete(req.params.id); 
                    console.log("SUCCESS deleted movie");
                    res.status(200).json(deletedMovie); 
                }
                catch (err) {
                    console.error(err);
                    res.status(500).send();
                }
        
            }
            else{
                console.log("incorrect user!");
                res.status(403).json({errorMessage: "You're not allowed to delete movie"});
            }
        }
        asyncCheckIsAdmin();
    })
     
}

getMovie = async (req, res) => {
    try{
        console.log("user._id: " + user._id);
        console.log("req.userId: " + req.userId);
        const getMovie = await Movie.findById(req.params.id); 
        console.log("SUCCESS found movie");
        res.status(200).json("movie has been found: " + {getMovie});
    }
    catch(err){
        console.error(err);
        res.status(500).send();
    } 
}

getMovieRandom = async (req, res) => {          // get random movie for the big background screen
    const type = req.query.type;        // example: in movieRoute, ("/getRandom?type=series") will return series

    let movie;
    try{
        if(type === "series"){
            movie = await Movie.aggregate([
                {$match: {isSeries: true}},
                {$sample: {size: 1}}                // find all series, then give us 1 sample 
            ])
        }
        else{
            movie = await Movie.aggregate([
                {$match: {isSeries: false}},
                {$sample: {size: 1}}                // find all movies, then give us 1 sample 
            ])
        }
        res

        console.log("user._id: " + user._id);
        console.log("req.userId: " + req.userId);
        const getMovie = await Movie.findById(req.params.id); 
        console.log("SUCCESS found movie");
        res.status(200).json("movie has been found: " + {getMovie});
    }
    catch(err){
        console.error(err);
        res.status(500).send();
    } 
}

getAllMovie = async (req, res) => {
    const query = req.query.new;
    if(req.user.isAdmin){
        try{
            console.log("user._id: " + user._id);
            console.log("req.userId: " + req.userId);
            const allMovie =await Movie.find(); //if query, return last 10, else return all user
            console.log("SUCCESS get all movies ");
            res.status(200).json(allMovie.reverse());       // return most recent created movies
        }
        catch(err){
            console.error(err);
            res.status(500).send();
        }
    }
    else{
        res.status(403).json({errorMessage: "You're not allowed to see all users"});
    }
}



module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovie,
    getMovieRandom,
    getAllMovie
};