require('dotenv').config();
const express = require("express")
const massive = require('massive');
const {getInventory, addProduct, updateProduct, removeProduct} = require('./controllers/controller');

const app = express();

const { CONNECTION_STRING } = process.env;
app.use(express.json());

massive(CONNECTION_STRING)
.then(dbInstance => { 
    app.set('db', dbInstance)
    console.log('Database Connected')
})
.catch(error => {
    console.log(error);
})

app.get('/api/inventory', getInventory);
app.post('/api/product', addProduct);
app.put('/api/product/:id', updateProduct);
app.delete('/api/product/:id', removeProduct);

app.listen(5050, () => {console.log('Running on PORT 5050.')});