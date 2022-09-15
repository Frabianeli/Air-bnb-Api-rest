const reservationControllers = require('./reservations.controllers')


const getAll = (req, res) => {
    reservationControllers.getAllReservations()
        .then(response => {
            res.status(200).json({items: response.length, reservation: response})
        })
        .catch(err => {
                res.status(400).json({status: 400, message: err.message})
            })
}

const getAllMy = (req, res) => {
    const userId = req.user.id
    reservationControllers.getAllMyReservation(userId)
        .then((response) => {
            res.status(200).json({items: response.length, reservation: response})
        } )
        .catch((err) => {
            res.status(400).json({status: 400, message: err.message})
        })
}


const getById = (req, res) => {
    const reservationId = req.params.id
    const userId = req.user.id
    const roleId = req.user.rol
  
    reservationControllers.getReservationById(reservationId, userId, roleId)
      .then((response) => {
        if(response) {
          res.status(200).json(response)
        }else {
          res.status(400).json({message: "Invalid Id"})
        }
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  }

  const getMyById = (req, res) => {
    const reservationId = req.params.id
    const userId = req.user.id
    reservationControllers.getReservationById(reservationId, userId)
      .then((response) => {
        if(response) {
          res.status(200).json(response)
        }else {
          res.status(400).json({message: "Invalid Id"})
        }
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  }

const create = (req, res) => {
    const userId = req.user.id
    console.log(userId)
    const data = req.body
    const accomodationId = req.params.id
    if (!Object.keys(data).length) {
        return res.status(400).json({ message: "Missing data" });
      } else if (
        !data.arrival ||
        !data.departure ||
        !data.adults
      ) {
        return res.status(400).json({
          message: "All fields must be completed",
          fields: {
            arrival: "2022-09-12 11:17:50.213 -0500",
            departure: "2022-09-12 11:17:50.213 -0500",
            adults: "number integer"
          }
        })
      }

    reservationControllers.createReservation(data, userId, accomodationId)
        .then(response => {
            if(response){
                res.status(201).json(response)
            } else {
                res.status(400).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({status: 400, message: err.message})
        })
}

const edit = (req, res) => {
    const data = req.body
    const userId = req.user.id
    const reservationId = req.params.id
    console.log(req.user)
    if (!Object.keys(data).length) {
        return res.status(400).json({ message: "Missing data" });
      } else if (
        !data.arrival ||
        !data.departure ||
        !data.adults
      ) {
        return res.status(400).json({
          message: "All fields must be completed",
          fields: {
            arrival: "2022-09-12 11:17:50.213 -0500",
            departure: "2022-09-12 11:17:50.213 -0500",
            adults: "number integer"
          }
        })
      }
      reservationControllers.editReservation(data, userId, reservationId)
        .then((response) => {
            if (response) {
                return res.status(200).json({
                message: `Reservation with the id ${response.id} edited successfully`
                })
            } else {
                return res.status(404).json({ message: "Invalid ID" })
            }
            })
        .catch((err) => {
            res.status(400).json({ message: err })
        })
}

const remove = (req, res) => {
    const userId = req.user.id
    console.log(req.user)
    const reservationId = req.params.id
    reservationControllers.deleteReservation(reservationId, userId)
        .then((response) => {
            if (response) {
                res.status(204).json()
              } else {
                res.status(400).json({ message: `Invalid Id` })
              }
        })
        .catch((err) => {
            res.status(400).json({ message: err })
        })
}

module.exports = {
    getAll,
    getById,
    getAllMy,
    create,
    edit,
    remove,
    getMyById
}