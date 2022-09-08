const express = require("express");
const { uploadImages } = require("../controllers/upload");

const imageUpload = require("../middlewares/imageUpload");

const router = express.Router();

router.post("/uploadImages", imageUpload, uploadImages);

module.exports = router;
