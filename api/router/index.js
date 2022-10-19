const express = require('express');
require('express-group-routes');
const router = express.Router();
const {controller} = require('../index')

router.group('/', (router) => {

    // router.get('/', controller.docs);

    router.group('/api/v1/', (router) => {
        router.get('/home', controller.home)
    })
})

module.exports = router;