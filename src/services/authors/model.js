import { DataTypes } from "sequelize";

import sequelize from "../../utils/db/connect.js";

import Sequelize from "sequelize";

// model definition

/**
 * its created if this module (current file that you are looking) is imported to anywhere
 * that is executed
 */
const Author = sequelize.define(
  "author",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // this is unique generated id with uuid4 standards
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://i.pravatar.cc/300",
      validate: {
        // this attribute is using validator.js library under the hood , so it supports everything that library supports
        isURL: true,
      },
    },
  },
  { underscored: true } // this attribute is converting camelCase to snake_case
);

export default Author;
