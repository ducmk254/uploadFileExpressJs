const express = require('express');
var multer  = require('multer');

const controller = require('../controllers/users.controller');

var upload = multer({ dest: './public/uploads/' });
const router = express.Router();



router.get('/',controller.getUsers);
router.get('/create',controller.createUser);
router.post('/create',upload.single('avatar'),controller.postCreateUser);

module.exports = router;
