const Accommodations = require('../models/accommodations.model')
const Places = require('../models/places.model')
const Users = require('../models/user.model')

const uuid = require("uuid")

const getAllAccommodations = async () => {
  const data = await Accommodations.findAll({
    include: [
      {
        model: Places,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        }
      },
      {
        model: Users,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"]
        }
      }
    ],
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    }
  })
  return data;
}

const getAccommodationById = async (id) => {
    const data = await Accommodations.findOne({
      where: {
        id,
      },
      include:[ {
        model: Places,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },{
        model: Users,
        as: 'user',
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      }
    ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId", "placeId", "hostId"],
      },
    })
    return data
  }

  const getMyAccommodationById = async(reservationId, userId) => {
    const data = await Accommodations.findOne({
      where: {
        id: reservationId,
        userId,
      }
    })
    return data
  }

  const getAllMyAccommodations = async (userId) => {
    const data = await Accommodations.findAll({
      where: {
        hostId: userId,
      },
      include: [
        {
          model: Places,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: Users,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"]
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    })
    return data
  }

  const createAccommodation = async (data, hostId, placeId) => {
    const newAccommodation = await Accommodations.create({
      ...data,
      id: uuid.v4(),
      hostId,
      placeId,
    })
    return newAccommodation
  }

  const editAccommodation = async (data, accommodationId, userId, roleId) => {
    const { id, hostId, score, ...newData } = data
    if(roleId === '5ee551ed-7bf4-44b0-aeb5-daaa824b9473'){
        const response = await Accommodations.update(
            {...newData, roleId},
            {where: { id: accommodationId  } }
        )
        return response
    } else {
        const response = await Accommodations.update(
            {...newData},
            {where: { id: accommodationId, hostId: userId } }
        )
        return response
    }
}

const deleteAccommodation = async (accommodationId, roleId, userId) => {
  if (roleId === '5ee551ed-7bf4-44b0-aeb5-daaa824b9473') {
    const response = await Accommodations.destroy({
      where: { id: accommodationId }
    })
    return response
  } else {
    const response = await Accommodations.destroy({
      where: { id: accommodationId, hostId: userId }
    })
    return response;
  }
}


module.exports = {
    getAllAccommodations,
    getAccommodationById,
    getAllMyAccommodations,
    createAccommodation,
    deleteAccommodation,
    editAccommodation,
    getMyAccommodationById
}