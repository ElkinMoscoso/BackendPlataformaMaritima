import { Schema, model } from 'mongoose';

const lotSchema = new Schema({
  name: String,
  date: Date,
  state: { type: Boolean, default: true },
});

export default model('Lot', lotSchema);
