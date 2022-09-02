// wiki.js - Wiki route module.
const HelloController = require('../controllers/helloController')
const AlbumController = require('../controllers/albumController')
const TrackController = require('../controllers/trackController')
var express = require('express');
var router = express.Router();


// Home page route.
router.get('/', function (req, res){ 
    HelloController.sayHello(req, res)
})

// Albunms page route.
router.get('/albums/getAlbum/', function (req, res){ 
    AlbumController.getAlbum(req,res)
})

// Traks page route.
router.get('/tracks/getTrack', function (req, res) {
    TrackController.getTrack(req, res)
})

// Users page route.
router.get('/tracks', function (req, res) {
    AboutController.sayAbout(req, res)
})

module.exports = router;


