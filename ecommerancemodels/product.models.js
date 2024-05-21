import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    description: {
      type: string,
      required: true,
    },
    name: {
      type: string,
      required: true,
    },
    productImage: {
      type: string,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  },
  { timestamps: true }
);
export const Product = mongoose.model("Product", productSchema);
