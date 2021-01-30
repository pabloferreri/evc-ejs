
const indexController = {
    indexView : function(req, res, next) {
        res.render('index');
    },
    aboutView : function(req, res, next) {
        res.render('about');
    }
}

module.exports = indexController;