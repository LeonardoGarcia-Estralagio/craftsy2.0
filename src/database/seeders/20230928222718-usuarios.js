"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "admin",
          surname: "craftsy",
          email: 'admin@gmail.com',
          password: "$2a$10$a0BZhDyplT3WQ3/OuZjZwelKzfaj3EpDuhIrwbbVp57k5QxDi1Nem",
          image: null,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "user",
          surname: "craftsy",
          email: 'user@gmail.com',
          password: "$2a$10$a0BZhDyplT3WQ3/OuZjZwelKzfaj3EpDuhIrwbbVp57k5QxDi1Nem",
          image: null,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
};
