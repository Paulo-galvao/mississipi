import conn from "../config/conn.js";
const Schema = conn.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true // data de criação e ultima atualização
});

const Product = conn.model("Product", productSchema);

export default Product;