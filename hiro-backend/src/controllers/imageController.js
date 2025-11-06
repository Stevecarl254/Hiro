import multer from "multer"
import path from "path"
import fs from "fs"
import { fileURLToPath } from "url"
import { dirname } from "path"
import Image from "../models/Image.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const category = req.body.category
    const uploadPath = path.join("uploads", category)
    fs.mkdirSync(uploadPath, { recursive: true })
    cb(null, uploadPath)
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
})

const upload = multer({ storage })

export const uploadImage = [
  upload.single("image"),
  async (req, res) => {
    try {
      const image = await Image.create({
        filename: req.file.filename,
        url: `/uploads/${req.body.category}/${req.file.filename}`,
        category: req.body.category,
        uploadedBy: req.user._id,
      })
      res.status(201).json({ message: "Image uploaded", image })
    } catch (error) {
      res.status(500).json({ message: "Upload failed", error: error.message })
    }
  },
]
// @desc Get images by category
// @route GET /api/images/:category
// @access Public (but filtered)
export const getImagesByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    // Define which categories are public
    const publicCategories = ["gallery", "events", "staff"];

    if (!publicCategories.includes(category)) {
      return res.status(403).json({ error: "Access denied for this category" });
    }

    // Fetch from DB
    const images = await Image.find({ category });

    // If none in DB, fallback to filesystem
    if (!images.length) {
      const dirPath = path.join(__dirname, `../uploads/${category}`);
      if (!fs.existsSync(dirPath)) {
        return res.status(404).json({ error: "Category not found" });
      }

      const files = fs.readdirSync(dirPath).map((file) => ({
        filename: file,
        url: `/uploads/${category}/${file}`,
      }));

      return res.json(files);
    }

    res.json(images);
  } catch (error) {
    res.status(500).json({ message: "Error fetching images", error: error.message });
  }
};
