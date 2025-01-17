import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  password: { type: String },
  role: { type: String, default: 'CLIENT' },
  state: { type: Boolean, default: false },
});

export default model('User', userSchema);
