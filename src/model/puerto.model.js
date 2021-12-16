import { Schema, model } from 'mongoose';

const puertoSchema = new Schema({
  name: { type: String, required: true },
  longitud: { type: String },
  latitud: { type: String },
  state: { type: Boolean, default: true },
});

export default model('SeaPort', puertoSchema);
