const controller = require('../controllers/pets.js')(),
            path = require('path');

module.exports = function(app) {
    app.get('/basic', (req, res) => {
        controller.readAll(req, res);
    })

    app.post('/basic', (req, res) => {
        controller.createPet(req, res);
    })

    app.delete('/basic/:id', (req, res) => {
        controller.deletePet(req, res);
    })
    
    app.get('/basic/:id', (req, res) => {
        controller.readOne(req, res);
    })

    app.put('/basic/like/:id', (req, res) => {
        controller.updateLike(req, res);
    })

    app.put('/basic/edit/:id', (req, res) => {
        controller.update(req, res);
    })

    app.all("*", (req,res, next) => {
        res.sendFile(path.resolve("./angular/dist/angular/index.html"))
      });
    }

