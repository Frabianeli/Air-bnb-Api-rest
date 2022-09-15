const placesControllers = require('./places.controllers')

const getAll = (req, res) => {
    placesControllers.getAllPlaces()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(400).json({ message: err })
        })
}

const getById = (req, res ) => {
    const id = req.params.id
    placesControllers.getPlaceById(id)
        .then((response) => {
            if(response){
                res.status(200).json(response)
            } else{
                res.status(400).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({ message: err })
        })
}

module.exports = {
    getAll,
    getById
}