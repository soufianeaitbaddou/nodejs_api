const express = require('express');
const validate = require('express-validation');
const models = require('../models');
const router = express.Router();
var slugify = require('slugify');
const validatecategories = require('./validation/categories');


router.get('/', (req, res, next) => {
    models.Categorie.findAll({
        attributes: ['name', 'slug']
    })
        .then(data => {

            res.status(200).json({
                message: 'Handling GET requests to /categories',
                apiResponse: data
            });
        }).catch(err => {
            console.log(err);

        });

});

router.post('/', validate(validatecategories.createCategorie), (req, res, next) => {
    const requestsData = {
        name: req.body.name,
        slug: req.body.name ? slugify(req.body.name) : null
    };
    models.Categorie.create(requestsData).then(categorie => {
        res.status(201).json({
            message: 'Handling POST requests to /categories',
            apiResponse: categorie
        });
    }).catch(err => {
        console.log(err);

    });
});

router.get('/:categorieId', (req, res, next) => {
    const id = req.params.categorieId;
    models.Categorie.findOne({ where: { id: id } })
        .then(categorie => {
            res.status(200).json({
                message: 'You discovered the special ID',
                categorie: categorie
            });
        }).catch(err => {
            console.log(err);

        })

});

router.patch('/:categorieId', validate(validatecategories.createCategorie), (req, res, next) => {
    const id = req.params.categorieId;
    const requestsData = {
        name: req.body.name,
        slug: req.body.name ? slugify(req.body.name) : null
    };
    models.Categorie.update(requestsData, {
        where: {
            id: id
        }
    }).then(categorie => {
        models.Categorie.findOne({ where: { id: id } })
            .then(categorie => {
                res.status(200).json({
                    message: 'Updated categorie!',
                    categorie: categorie
                });
            }).catch(err => {
                console.log(err);

            })
    }).catch(err => {
        console.log(err);
    })

});

router.delete('/:categorieId', (req, res, next) => {
    const id = req.params.categorieId;
    models.Categorie.destroy({
        where: {
            id: id
        }
    }).then(resp => {
        res.status(200).json({
            message: 'Deleted categorie!'
        });
    }).catch(err => {
        console.log(err);
    })

});

module.exports = router;