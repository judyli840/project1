var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/isPrime/:num', function(req, res, next) {
    var number = req.params.num;
    if (number == 2 ){
        res.send(true);
    }else if (number%2 === 0 || number == 1) {
            res.send(false);
    }else{
        for (var i = 3; i < number; i+=2) {
            if (number%i === 0)
                res.send(false);
        }
    }
    res.send(true); 
});

module.exports = router;