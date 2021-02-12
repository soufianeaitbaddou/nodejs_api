const Joi = require('joi');
const models = require('../../models');

module.exports = {
    
    // POST /api/tasks
    createCategorie: {
        
        body: {
            name: Joi.string().required(),
        }
    },
    createOffer: {
        body: {
            categorieId: Joi.string().required(),
        }
    },

};