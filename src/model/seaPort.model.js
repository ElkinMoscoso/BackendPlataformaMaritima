import { Schema, model } from 'mongoose';

const seaPortSchema = new Schema({
seaPort_id: { type: Schema.Types.ObjectId,ref:'Orders'},
  Name: String,
  Location: String,
  State: { type: Boolean, default: true }
});

export default model('seaPort', seaPortSchema);
