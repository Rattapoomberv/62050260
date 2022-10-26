var express = require("express");
var router = express.Router();
const blogController = require("../controller/blogController");

router.get("/", blogController.index);
router.get("/:id", blogController.show);
router.post("/", blogController.add);
router.delete("/:id", blogController.remove);
router.put("/:id", blogController.update);

module.exports = router;
