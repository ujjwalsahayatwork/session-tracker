const express = require("express");
const { saveSession, getSessionData } = require("../controler/session");

const router = express.Router();

router.post("/", saveSession);
router.get("/", getSessionData);

module.exports = router;
