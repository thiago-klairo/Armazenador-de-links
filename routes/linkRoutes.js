const express = require("express")
const router = express.Router();
const Link = require("../models/Link")
const linkController = require("../controller/linkController")
var methodOverride = require("method-override")

router.use(methodOverride('_method'))
router.get("/edit/:id", linkController.loadLink)

router.get("/", linkController.allLinks);

router.get("/:title", linkController.redirect)

router.get("/:id", linkController.redirect)

router.get("/add", (req, res) => {
    res.render("add", { error: false, body: {} })
})

router.post("/edit/:id", express.urlencoded({ extended: true }), linkController.editLink)

router.post("/", express.urlencoded({ extended: true }), linkController.addLink)

router.delete("/:id", linkController.deleteLink)

router.delete("/", express.urlencoded({ extended: true }), linkController.deleteLink)

module.exports = router;