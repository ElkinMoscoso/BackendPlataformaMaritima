import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: String,
  category_id: { type: Schema.Types.ObjectId, ref: 'Category' },
  size: {
    width: Number,
    height: Number,
  },
  state: { type: Boolean, default: true },
  colors: [String],
  features: [
    {
      name: String,
      decription: String,
      lot_id: { type: Schema.Types.ObjectId, ref: 'Lot' },
    },
  ],
});

export default model('Product', productSchema);
