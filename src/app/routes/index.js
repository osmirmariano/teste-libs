
const router = require('express').Router();
const packageJson = require('../../../package.json');

router.get('/', (req, res) => {
    res.type('text/plain')
    res.send("node-api")
})

router.use("/file", require("./file/file"));

module.exports = router;
