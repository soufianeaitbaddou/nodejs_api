
const express = require('express');
const router = express.Router();
const models = require('../models');
const { JwtService } = require('../services');
const bcrypt = require('bcrypt');
// Handle incoming GET requests to /orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/signup', (req, res, next) => {
    const Requser = {
        email: req.body.email,
        password: req.body.password,
        fullname: req.body.fullname
    };
    models.User.create(Requser).then(user => {
        res.status(201).json({
            message: 'User was created',
            order: user
        });
    }).catch(err => {
        res.status(422).json({
            apiResponse: err
        });
    })

});

router.post('/login', (req, res, next) => {
    const request = {
        email: req.body.email,
        password: req.body.password,
    };
    let user = models.User.findOne({ where: { email: request.email } });
    let valid = user.then((user) => {
        console.log(user.dataValues.password);
        console.log(request.password);
        if (user){
            console.log(bcrypt.compare(request.password, user.dataValues.password));
            
            return bcrypt.compare(request.password, user.dataValues.password);
        }else{
            console.log('yooo');
            
            throw err;
        }
    });
    return Promise.all([user, valid])
        .then(([user, valid]) => {
            if (valid) {
                let payload = { user: user.dataValues.email };
                return res.status(200).send(
                    { 
                        token: JwtService.sign(payload),
                        user:user.dataValues
                    
                    });
            } else {
                console.log('yooo');
                throw err;
            }
        })
        .catch((error) => res.status(401).send({ error: 'Invalid username/password' }));



});

module.exports = router;