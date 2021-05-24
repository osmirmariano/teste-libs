
"use strict";
const router = require("express").Router();
const arquivoController = require("../../controllers/file/file");
const multer = require('multer');
const uploadConfig = require('../../../config/upload');
const upload = multer(uploadConfig);

router.post("", upload.single('file'), arquivoController.arquivoTeste);
router.post("/image", upload.single('file'), arquivoController.arquivoTeste2);
router.post("/doc", upload.single('file'), arquivoController.arquivoDoc)


module.exports = router;
