import mongoose from "mongoose";

const guitarSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String },
  imageUrl: { type: String },
});

const Guitar = mongoose.model("guitar", guitarSchema);

export default Guitar;
