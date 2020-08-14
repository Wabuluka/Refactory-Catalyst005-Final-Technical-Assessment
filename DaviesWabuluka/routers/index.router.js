const express = require('express')
const Registration = require('../models/index.model')
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index')
})

// getting the form content through a post
router.post('/', async (req, res)=>{
    
    const surname = req.body.surname
    const givenname = req.body.givenname
    const dob = req.body.dob
    const residence = req.body.residence
    const occupation = req.body.occupation
    const nationality = req.body.nationality
    const gender = req.body.gender
    const category = req.body.category

    const register = new Registration({
        surname: surname,
        givenname: givenname,
        dob: dob,
        residence: residence,
        occupation: occupation,
        nationality: nationality,
        gender: gender,
        category: category
    })

    await register.save((err, register)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })


})


module.exports = router;
