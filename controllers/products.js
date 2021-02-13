const fs = require('fs');
const path = require('path');
const { send } = require('process');

const productsFilePath = path.join(__dirname, '../data/dishies.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
   /* show : function(req, res) {

        if (req.params.id){

            const productRequested = products.find(product => product.id == req.params.id);

            if(productRequested){
            return res.render("products/detail", {productRequested});
            }
            return res.send("Plato típico")
        }
        
        return res.send("Plato típico")
         
        
    }*/
    show: (req,res) => req.params.id ? products.find(product => product.id == req.params.id ) ? res.render("products/detail",{productRequested: products.find(product => product.id == req.params.id)}): res.send("Plato Tipico"): res.send("Plato Tipico")
}

module.exports = productsController;