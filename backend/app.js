import express from 'express';
import "dotenv/config";
const port = process.env.PORT || 3000;

import productsRouter from "./routes/product.router.js";

const app = express();
app.use(express.json());

app.use("/api/products", productsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});