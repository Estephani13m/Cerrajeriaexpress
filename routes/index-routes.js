var express = require('express');
const indexController = require('../controllers/index-controller')

const ContactosController = require("../controllers/contactos-controller");
const contactosController = new ContactosController();
const router = express.Router();


router.get('/',indexController);
router.post('/form-contacto',contactosController.add);

module.exports = router;
