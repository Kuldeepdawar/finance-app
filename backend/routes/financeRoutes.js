const express = require("express");
const router = express.Router();
const financeController = require("../controllers/financeController");

router.post("/", financeController.createFinance);
router.get("/", financeController.getFinances);
router.put("/:id", financeController.updateFinance);
router.delete("/:id", financeController.deleteFinance);

module.exports = router;
