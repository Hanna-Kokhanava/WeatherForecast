var express = require('express');
var router = express.Router();
var handlers = require('../handlers');

router.route('/:city')
    .get(function(req, res) {
        handlers.current(req.params.city, function(err, result) {

            if (err) {
                res.writeHead(500);
                res.end();
                return;
            }
            
            res.json(result);

        });
    })

module.exports = router;
