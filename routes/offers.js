const express = require('express');
const router = express.Router();
const models = require('../models');

// Handle incoming GET requests to /orders
router.get('/', (req, res, next) => {

    models.Offer.findAll({
        include: ['categorie', 'level', 'type', 'experience']
        , attributes: ['title', 'slug', 'description']
    }).then(Offers => {
        res.status(200).json({
            message: 'offers were fetched',
            data: Offers.map(o => {
                return {
                    id: o.id,
                    id: o.id,
                    slug: o.slug,
                    description: o.description,
                    categorie: o.categorie.name,
                    level: o.level.name,
                    type: o.type.name,
                    experience: o.experience.name
                }
            })
        });
    }).catch(err => {
        console.log('fdf');
        res.status(200).json({
            message: err
        });
    })

});

router.post('/', (req, res, next) => {
    const requestsData = {
        title: 'offer 2',
        slug: 'offer-2',
        description: 'description offer 2',
        categorieId: 20,
        typeId:20,
        levelId:202,
        experienceId:40,
    };
    models.Offer.create(requestsData).then(offer => {
        res.status(201).json({
            message: 'Handling POST requests to /categories',
            apiResponse: offer
        });
    }).catch(err => {
        console.log(err);
        res.status(422).json({
            message: 'Handling POST requests to /categories',
            apiResponse: err
        });
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted',
        orderId: req.params.orderId
    });
});

module.exports = router;