'use strict';

var Clarifai = require('clarifai');
var clarifaiConfig = require('../config/clarifai_config');
var ClarifaiService = require('./services/clarifai_service');

var clarifaiApp = new Clarifai.App(clarifaiConfig.CLIENT_ID, clarifaiConfig.CLIENT_SECRET);
var clarifaiService = new ClarifaiService(clarifaiApp);

const PIZZA_HUT_IMAGE_URL = 'https://s-media-cache-ak0.pinimg.com/originals/1d/bc/80/1dbc803a9cf20a8fe139c06e0462fad9.jpg';

var clarifaiModel = Clarifai.GENERAL_MODEL;

clarifaiService.predictImageFromModel(clarifaiModel, PIZZA_HUT_IMAGE_URL, function (err, prediction) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }

    console.log(JSON.stringify(prediction, null, 4));
    process.exit(0);
});