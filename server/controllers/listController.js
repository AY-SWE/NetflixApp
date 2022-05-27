/*
    This is our back-end API. It provides all the data services
    our database needs. Note that this file contains the controller
    functions for each endpoint for lists
    
    @author Andy Yang
*/

const List = require('../models/List')
//const CryptoJs = require("crypto-js");
const bcrypt = require("bcryptjs");
const auth = require("../auth.js/index.js");

createList = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            errorMessage: 'Improperly formatted request',
        })
    }

    if(req.user.isAdmin){
        const newList = new List(body);
        console.log("creating list: " + JSON.stringify(newList));
        if (!newList) {
            return res.status(400).json({
                errorMessage: 'Improperly formatted request',
            })
        }

        try{
            const savedList = await newList.save();
            console.log("new list saved: " + savedList._id);
            res.status(200).json(savedList); 
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

deleteList = async (req, res) => {
    console.log("delete list with id: " + JSON.stringify(req.params.id));
    List.findById({ _id: req.params.id }, (err, list) => {
        console.log("List found: " + JSON.stringify(list));
        if (err) {
            return res.status(404).json({
                errorMessage: 'List not found!',
            })
        }

        async function asyncCheckIsAdmin(){
            if(req.user.isAdmin){
                try{
                    const deletedList = await List.findByIdAndDelete(req.params.id); 
                    console.log("SUCCESS deleted list");
                    res.status(200).json(deletedList); 
                }
                catch (err) {
                    console.error(err);
                    res.status(500).send();
                }
        
            }
            else{
                console.log("incorrect user!");
                res.status(403).json({errorMessage: "You're not allowed to delete list"});
            }
        }
        asyncCheckIsAdmin();
    })
     
}

getListRandom = async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try{
        if(typeQuery){
            if(genreQuery){
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery, genre: genreQuery}}
                ]);
            }
            else{       //has type but bo genre
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery}}
                ]);
            }
        }
        else{
            list = await List.aggregate([
                {$sample: {size: 10}}
            ])
        }
        console.log("SUCCESS found lists");
        res.status(200).json("lists has been found: " + {list});
    }
    catch(err){
        console.error(err);
        res.status(500).send();
    } 
}



module.exports = {
    createList,
    deleteList,
    getListRandom
};