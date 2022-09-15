const uuid = require('uuid')
const Accommodations = require('../models/accommodations.model')
const Reservations = require('../models/reservations.model')

const getAllReservations = async () => {
    const data = await Reservations.findAll()
    return data
}

const getReservationById = async (reservationId, userId, roleId) => {
    if (roleId === '5ee551ed-7bf4-44b0-aeb5-daaa824b9473') {
      const data = await Reservations.findOne({
        where: {
          id: reservationId,
        }
      })
      return data
    } else {
        const data = await Reservations.findOne({
          where: {
            id: reservationId,
            userId,
          }
        })
        return data
    }
  }

  const getAllMyReservation = async (userId) => {
    const data = await Reservations.findAll({
        where: {
          userId,
        }
      })
      return data
  }

  const getMyReservationById = async(reservationId, userId) => {
    const data = await Reservations.findOne({
      where: {
        id: reservationId,
        userId,
      }
    })
    return data
  }

const createReservation = async (data, userId, accommodationId) => {
    const newReservation = await Reservations.create({
      ...data,
      id: uuid.v4(),
      userId: userId,
      accommodationId: accommodationId
    })
    console.log(newReservation)
    return newReservation
  }

const deleteReservation = async (reservationId, userId) => {
    const host = await Accommodations.findOne({
        where: {
            hostId: userId,
        }
    })
    if(host.hostId === userId){
        const data = await Reservations.destroy({
            where: {
                id : reservationId
            }
        })
        return data
    } else {
        const data = await Reservations.destroy({
            where: {
                id : reservationId,
                userId: userId
            }
        })
        return data
    }
}


const editReservation = async (data, userId, reservationId) => {
    const {id, ...restOfData} = data

    const response = await Reservations.update(restOfData, {
        where: {
            userId,
            id: reservationId,
        }
    })

    return response
}

module.exports = {
    getAllReservations,
    getAllMyReservation,
    getReservationById,
    createReservation,
    deleteReservation,
    editReservation,
    getMyReservationById
}