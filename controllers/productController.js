// controllers/productController.js

exports.getAllProducts = (req, res) => {
    res.send("Fetching all products");
  };
  
  exports.getProductById = (req, res) => {
    res.send(`Fetching product with ID: ${req.params.id}`);
  };
  
  exports.addProduct = (req, res) => {
    res.send("Adding a new product");
  };
  