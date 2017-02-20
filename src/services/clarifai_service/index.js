'use strict';

var assert = require('assert-plus');

function ClarifaiService (clarifaiApp) {
    assert.object(clarifaiApp);

    this.clarifaiApp = clarifaiApp;
}

ClarifaiService.prototype.predictImageFromModel = function (modelId, imageUrl, callback) {
    assert.string(modelId);
    assert.string(imageUrl);
    assert.func(callback);

    this.clarifaiApp.models.predict(modelId, imageUrl).then(
        function (prediction) {
            callback(null, prediction);
        },
        function (err) {
            callback(err);
        }
    );
};

module.exports = ClarifaiService;