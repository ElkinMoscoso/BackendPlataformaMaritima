import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  name: { type: String, required: true },
  state: { type: Boolean, default: true },
});

export default model('Category', categorySchema);