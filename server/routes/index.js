var express = require('express');
var router = express.Router();
var portfolio = require('../controllers/portfolios')

/* GET home page. */
router.get('/', portfolio.getPortfolios)

router.get('/:slug', portfolio.getPortfolio)

router.post('/', portfolio.createPortfolio)

router.delete('/:id', portfolio.deletePortfolio)

router.put('/:id', portfolio.updatePortfolio)

module.exports = router;
