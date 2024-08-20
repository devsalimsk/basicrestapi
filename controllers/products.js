const getAllProducts = async(req, res) => {
    res.status(200).json({msg: " I got all products"});
};

const getAllProductsTesting = async(req, res) => {
    res.status(200).json({msg: " I got all Products Testing"});
};

module.exports = {getAllProducts, getAllProductsTesting};