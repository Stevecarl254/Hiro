import express from "express";
import { uploadImage, getImagesByCategory } from "../controllers/imageController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin: Upload image
router.post("/upload", protect, adminOnly, uploadImage);

// Public: View gallery/events/staff
router.get("/:category", getImagesByCategory);

export default router;
