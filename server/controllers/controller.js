getInventory = (req, res) => {
    const db = req.app.get('db');
    db.get_products().then(product => {
        res.status(200).json(product)
    }).catch(error => {
        console.log(error);
        res.status(500).json("Computer is lazy and doesn't want to complete your request")
    })
};

addProduct = (req, res) => {
    const db = req.app.get('db');
    const {image, product, price} = req.body;
    db.create_product(image, product, price).then(() => {
        res.sendStatus(200)/*.json(image, product, price)*/;
    }).catch(error => {
        console.log(error);
        res.status(500).json("Shoot you're really having a tough time getting your computer to get its lazy butt to work.");
    })
};

updateProduct = (req, res) => {
    const db = req.app.get('db');
    const{ params } = req.params;
    db.update_product([params.id]).then(product => {
        res.sendStatus(200).json(product);
    }).catch(error => {
        console.log(error);
        res.status(500).json("Uhm maybe it's time to consider getting a new computer, or maybe pick up a new hobby.")
    })
};

removeProduct = (req, res) => {
    const db = req.app.get('db')
    const{id} = req.params;
    db.remove_product(+id).then(product => {
        res.sendStatus(200).json(product);
    }).catch(error => {
        console.log(error)
        res.status(500).json("Welp looks like you need to get a new computer...or a new career");
    })
};

module.exports = {
    getInventory,
    addProduct,
    updateProduct,
    removeProduct
}