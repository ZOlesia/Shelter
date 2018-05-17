const mongoose = require('mongoose'),
        Pet = mongoose.model('Pet');

module.exports = function(){
    return{
        readAll: (req, res) => {
            Pet.find({}).sort({type: 1}). exec( (err, pets) => {
                err ? res.json ({message: 'Eror', err}) : res.json({message:'Success', pets});
            })
        },

        createPet: (req, res) => {
            let newPet = new Pet({
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
                skills: req.body.skills
            });
            newPet.save((err) => {
                err ? res.json({message: 'Error', err}) : res.redirect('/basic');
            })
        },

        readOne: (req, res) => {
            Pet.findOne({_id: req.params.id}, (err, pet) => {
                    err ? res.json({message: 'Error', err}) : res.json({message:'Success', pet});
            })
        },


        deletePet: (req, res) => {
            Pet.deleteOne({_id: req.params.id}, (err, pet) => {
                err ? res.json({message: 'Error', err}) : res.json({message:'Success', pet});
            })
        },

        // updateLike: (req, res) => {
        //     Pet.findOne({ _id: req.params.id }, (err, data) => {
        //         if (!err) {
        //             data.likes = data.likes + 1;
        //             data.save((err2, like) => {
        //                 if (err) {
        //                     res.json({ message: "Error", err2 })
        //                 } else {
        //                     res.json({ message: "Success", like });
        //                 }
        //             })
        //         }
        //     })
        // },
        updateLike:(req, res) => {
            Pet.findOneAndUpdate({_id: req.params.id}, {likes: req.body.likes}, (err) => {
                err ? res.json({message: "Error", err}): res.json({message: "Success"});
            })
        },

        update: (req, res)=>{
            let updatedPet = {
                name: req.body.name,
                type: req.body.type, 
                description: req.body.description, 
                skills: req.body.skills
            }
            Pet.findByIdAndUpdate({_id: req.params.id}, updatedPet, {runValidators: true, context: 'query'} , (err)=>{
                err ? res.json({message: "Error", err}): res.json({message: "Success"});
            })
        }
    }
}

