import express from "express";
import productControllers from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", productControllers.show);
router.post("/", productControllers.store);
router.delete("/:id", productControllers.destroy);
router.put("/:id", productControllers.update);

export default router;