const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/dishies.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    diferentProducts : function(req, res, next) {

        if (req.params.id == null) {
            res.render('detalleMenu', {productRequested : {
                "id": 1,
                "title": "Plato Típico",
                "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                "price":  75.50,
                "image": "principal.jpg"
            }});
        }else{
            idProduct = req.params.id;

            const productRequested = products.filter(product => product.id == idProduct);
    
            return res.render("detalleMenu", {productRequested : productRequested[0]}); 
        }
        
        /*res.send(productRequested);*/
    }
}

module.exports = productsController;