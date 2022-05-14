const signale = require("signale");
const Product = require("../database/models/Product");
const {
  addProductValidation,
  removePoductValidation,
} = require("../database/controllers/validation");

exports.allProducts = async (req, res) => {
  signale.pending("Admin is trying to get all products ...");
  try {
    const mydata = await Product.find({});
    signale.complete("A list of products sent to ADMIN !");
    res.json({ message: "Here is a list of products", products: mydata });
  } catch (error) {
    signale.fatal("Something went wrong getting all products");
    res.status(400).json("Invalid Token");
  }
};

exports.addProduct = async (req, res) => {
  signale.pending("Admin is trying to add a product ...");

  // Validate Product request body
  const { error } = addProductValidation(req.body);
  if (error) {
    signale.fatal("product add validation failed");
    return res.status(400).json({ error: "add Product validation failed!" }); // The message is form the joi object in validation.js
  }

  // Create new Product
  const product = new Product({
    title: req.body.title,
    category: req.body.category,
    cost: req.body.cost,
    owner_id: req.body.owner_id, // You are needed to put in the id
    productImage: "testLinkPositionForAnImageUrl", // Test image link hardcoded
    description: req.body.description,
  });
  try {
    const savedProduct = await product.save();
    signale.complete("Product saved " + savedProduct);
    return res.json({ user: savedProduct });
  } catch (err) {
    return res.status(400).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  signale.pending("Admin is trying to delete a product ...");
  try {
    const { error } = removePoductValidation(req.body);
    if (error) {
      signale.fatal("Remove input validation failed :(");
      return res.status(400).json({ error: error.details[0].message }); // The message is form the joi object in validation.js
    }

    // Storing the ID to be deleted
    const id = req.body.product_id;
    signale.info("id -> " + id);

    // Make sure the id format is correct
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      signale.fatal("Object-Id format not right!");
      return res
        .status(400)
        .json({ errorMessage: `Object-Id format not right!` });
    }

    // if existing Product
    const productExists = await Product.findOne({ _id: req.body.product_id });
    if (!productExists) {
      signale.fatal("Product does not exist :(");
      return res.status(400).json({ error: "Product does not exist :(" });
    }
    // Create new User
    const product = await Product.findById(req.body.product_id);
    await product.remove();
    signale.complete(`Product of id ${id}, succefully Removed!`);
    res.json({ message: `Product of id ${id}, succefully Removed!` });
  } catch (err) {
    signale.fatal("Something went wrong while removing ... ");
    console.log(err);
    res.status(400).json(err);
  }
};

// UPDATE FUNCTIONALITIES TO BE IMPLEMENTED IN THE FUTURE

exports.updateProduct = async (req, res) => {
  signale.pending("Admin is trying to update a product ...");
};
