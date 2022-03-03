import { DataTypes } from 'sequelize';
import { sequelize } from '../db/db.js';
import { Cars } from './cars.js';

export const Users = sequelize.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  hash_password: { type: DataTypes.STRING },
  user_role: { type: DataTypes.STRING, defaultValue: 'USER' }
});

Users.hasMany(Cars);
Cars.belongsTo(Users);
