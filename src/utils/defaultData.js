const Accommodation_images = require("../models/accomodationsImage.model");
const Accommodations = require("../models/accommodations.model");
const Places = require("../models/places.model");
const Reservations = require("../models/reservations.model");
const Users = require("../models/user.model");
const Users_images = require("../models/usersImg.model");
const Roles = require("../models/roles.model");

const generateData = async() => {
  await Roles.bulkCreate([{name: "guest", id: "fef3a08d-2cec-4728-9745-7cbd2b37e557"}, {name: "host", id: "97006fe0-4a35-47f4-bfbf-fc962e5fe500"}, {name: "admin", id: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473"}], {validate: true})
  
  await Users.create({
    id: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    firstName: "Sahid",
    lastName: "Kick",
    gender: "male",
    email: "sahid.kick@academlo.com",
    password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
    phone: "1234567890",
    birthdayDate: "2016-01-01",
    dni: "sadsad",
    address: "cowwdw",
    roleId: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473",
    profileImage: "dsadwqd",
    status: "active",
    verified: false,
    country: 'Mexico'
  })

  await Users.create({
    id: "1098b922-3841-4416-a471-fb2ca0f7efa4",
    firstName: "Juan",
    lastName: "leon",
    gender: "male",
    email: "juan@academlo.com",
    password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC", //root
    phone: "98765432",
    birthdayDate: "2016-01-01",
    dni: "s91234",
    address: "abcdef",
    roleId: "fef3a08d-2cec-4728-9745-7cbd2b37e557",
    profileImage: "URL",
    status: "active",
    verified: false,
    country: 'Argentina'
  })


  
  await Places.bulkCreate([
    {
      id: '864ee3c2-facd-4a23-8b4a-4e9d342d9036',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'México',
      continent: 'America'
    },
    {
      id: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
      city: 'Zapopan',
      state: 'Jalisco',
      country: 'México',
      continent: 'America'
    },
    {
      id: '3436a556-6623-40ba-88b8-2e01009f9d82',
      city: 'Suba',
      state: 'Bogotá',
      country: 'Colombia',
      continent: 'America'
    },
    {
      id: '134a55b6-487c-46cc-a5b5-9392af20c205',
      city: 'Medellín',
      state: 'Antioquia',
      country: 'Colombia',
      continent: 'America'
    },
    {
      id: '3a230417-80ae-4232-a8ff-6fd50068a777',
      city: 'Azcapotzalco',
      state: 'CDMX',
      country: 'México',
      continent: 'America'
    },
    {
      id: '0d907427-7623-4ec9-8c6d-270bb92fbbe7',
      city: 'Monterrey',
      state: 'Muevo León',
      country: 'México',
      continent: 'America'
    },
  ])

  /*
  await Accommodations.create({
    id: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
    title: "premium - vistas 360 ciudad (alberca y gym)",
    description: "asd",
    guests: 6,
    rooms: 3,
    beds: 3,
    bathrooms: 4.5,
    price: 1536.0,
    hostId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    placeId: "9c0412b6-7d56-4347-8fbe-5455e8a42438",
    commision: 150.0,
  })

  await Accommodations.create({
    id: "35a42549-262e-4ad0-b6a9-82f281211992",
    title: "Esta la creo junior",
    description: "asdf",
    guests: 6,
    rooms: 3,
    beds: 3,
    bathrooms: 4.5,
    price: 1536.0,
    hostId: "3911e153-2d4a-4338-a4d6-a17fd38fea99",
    placeId: "9c0412b6-7d56-4347-8fbe-5455e8a42438",
    commision: 150.0,
  })

  await Reservations.create({
    id: "7383c6f8-7bc2-4058-b099-c3aff3d6f6e4",
    userId: "3911e153-2d4a-4338-a4d6-a17fd38fea99",
    arrival: "2022-09-12 09:08:13.756 -0500",
    departure: "2022-10-12 09:08:13.756 -0500",
    accommodationId: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
    adults: 1,
  })

  await Reservations.create({
    id: "59651d5f-b174-4d80-a6e5-fe22458ff112",
    userId: "4093ab84-6ae6-4e20-809c-ecdec8e06267",
    arrival: "2022-09-12 09:08:13.756 -0500",
    departure: "2022-10-12 09:08:13.756 -0500",
    accommodationId: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
    adults: 2,
  }) */

 /* await Accommodations.create({
      id: 'f2095856-3aec-4607-baf1-80716548ff06',
      title: 'Example1',
      description: 'example1234567890',
      guests: 10,
      rooms: 9,
      beds: 8,
      bathrooms: 4.5,
      price: 200.00,
      hostId: '74cd6011-7e76-4d6d-b25b-1d6e4182ec2f',
      score: 0.0,
      placesId: '134a55b6-487c-46cc-a5b5-9392af20c205',
      comision: 10.0,
      isActive: true
  })
  */
}


module.exports = generateData