import mongoose from "mongoose"

const imageSchema = new mongoose.Schema({
  filename: String,
  url: String,
  category: {
    type: String,
    enum: ["gallery", "staff", "events", "hero", "who-we-are"],
  },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.model("Image", imageSchema)
