import Product from "../models/Product.js";

async function store(req, res) {
    const product = req.body;

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "Por favor preencha todos os campos"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.log("Erro ao criar o produto", error.message);
        res.status(500).json({ success: false, message: "Erro ao criar o produto" });
    }
}

async function show(req, res) {
    try {
            const products = await Product.find().exec();
            res.status(200).json({ success: true, data: products });
        } catch (error) {
            console.log("Erro ao procurar produtos", error.message);
            res.status(500).json({ success: false, message: "Erro ao procurar os produtos" });
        }
}

async function destroy(req, res) {
    try {
        const product = await Product.findByIdAndDelete(req.params.id).exec();
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        console.log("Erro: ", "Erro ao excluir o produto", error.message);
        res.status(500).json({ success: false, message: "Erro ao excluir o produto" });
    }
}

async function update(req, res) {
    const product = req.body;

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "Por favor preencha todos os campos"});
    }
    
    try {
        await Product.findByIdAndUpdate(req.params.id, product).exec();
        res.status(200).json({sucess: true, data: product});
    } catch (error) {
        console.log("Erro: ", "Erro ao atualizar o produto", error.message);
        res.status(500).json({ success: false, message: "Erro ao atualizar o produto" });
    }
}

export default {
    store,
    show,
    destroy,
    update
}