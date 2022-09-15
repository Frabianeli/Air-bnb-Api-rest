const accommodationControllers = require('./accommodations.controller')

const getAll = (req, res) => {
    accommodationControllers.getAllAccommodations()
        .then(response => {
            res.status(200).json({items: response.length, accomodation: response})
        })  
        .catch(err => {
            res.status(400).json({status: 400, message: err.message})
        })
}

const getById = (req, res) => {
    const id = req.params.id
    accommodationControllers.getAccommodationById(id)
        .then(response => {
            if (response) {
                res.status(200).json(response)
              } else {
                res.status(400).json({ message: "Invalid ID" });
              }
        })
        .catch(err => {
            res.status(400).json({status: 400, message: err.message})
        })
}

const getAllMy = (req, res) => {
  const userId = req.user.id
  accommodationControllers.getAllMyAccommodations(userId)
      .then(response => {
          if (response) {
              res.status(200).json({items: response.length, accomodation: response})
            } else {
              res.status(400).json({ message: "Invalid ID" });
            }
      })
      .catch(err => {
          res.status(400).json({status: 400, message: err.message})
      })
}

const getMyById = (req, res) => {
  const reservationId = req.params.id
  const userId = req.user.id
  accommodationControllers.getMyAccommodationById(reservationId, userId)
      .then(response => {
          if (response) {
              res.status(200).json(response)
            } else {
              res.status(400).json({ message: "Invalid ID" });
            }
      })
      .catch(err => {
          res.status(400).json({status: 400, message: err.message})
      })
}

const create = (req, res) => {
    const data = req.body;
    const hostId = req.user.id;
    const placeId = req.params.id;
  
    if (!Object.keys(data).length) {
      return res.status(400).json({ message: "Missing Data" });
    } else if (
      !data.title ||
      !data.description ||
      !data.guests ||
      !data.rooms ||
      !data.beds ||
      !data.bathrooms ||
      !data.price ||
      !data.commision
    ) {
      return res.status(400).json({
        message: "All fields must be completed",
        fields: {
          title: "string",
          description: "string",
          guests: "number integer",
          rooms: "number integer",
          beds: "number integer",
          bathrooms: "number",
          price: "number",
          commision: "number",
        },
      })
    } else {
      accommodationControllers.createAccommodation(data, hostId, placeId)
        .then((response) => {
          res.status(201).json({
            message: `Accommodation created succesfully with id: ${response.id}`,
            accommodatiion: response,
          })
        })
        .catch((err) => {
          res.status(400).json({ err })
        })
    }
  }

  const edit = (req, res) => {
    const data = req.body;
    const accommodationId = req.params.id;
    const userId = req.user.id;
    const roleId = req.user.rol;
    
    if (!Object.keys(data).length) {
        return res.status(400).json({ message: "Missing Data" });
      } else if (
        !data.title ||
        !data.description ||
        !data.guests ||
        !data.rooms ||
        !data.beds ||
        !data.bathrooms ||
        !data.price ||
        !data.commision
      ) {
        return res.status(400).json({
          message: "All fields must be completed",
          fields: {
            title: "string",
            description: "string",
            guests: "number integer",
            rooms: "number integer",
            beds: "number integer",
            bathrooms: "number",
            price: "number",
            commision: "number",
            placeId: "uuid",
          },
        })
      } else {
      accommodationControllers.editAccommodation(data, accommodationId, userId, roleId)
        .then((response) => {
            console.log(response)
          if (response[0]) {
            return res.status(200).json({
              message: `Accommodation edited succesfully with id ${accommodationId}`
            })
          } else {
            return res.status(404).json({ message: "Invalid ID" })
          }
        })
        .catch((err) => {
          res.status(400).json({ message: err })
        })
    }
  }
  
  const remove = (req, res) => {
    const accommodationId = req.params.id
    const roleId = req.user.rol
    const userId = req.user.id
    
    accommodationControllers.deleteAccommodation(accommodationId, roleId, userId)
      .then((response) => {
        if (response) {
          res.status(204).json()
        } else {
          res.status(400).json({ message: `Invalid ID` })
        }
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  }

module.exports = {
    getAll,
    getById,
    create,
    edit,
    remove,
    getAllMy,
    getMyById
}