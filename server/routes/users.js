var express = require('express');
var router = express.Router();
var user = require('../controllers/users')

/* GET users listing. */
router.get('/', user.getUsers)

router.get('/:id', user.getUser)

router.post('/', user.createUser)

router.delete('/:id', user.deleteUser)

router.put('/:id', user.updateUser)

module.exports = router;
