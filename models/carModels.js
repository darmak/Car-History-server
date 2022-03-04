import { DataTypes } from 'sequelize';
import { sequelize } from '../models/index.js';
import { Cars } from './cars.js';

export const CarModels = sequelize.define('car_models', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  model: { type: DataTypes.STRING, unique: true, allowNull: false }
});

CarModels.hasMany(Cars);
Cars.belongsTo(CarModels);
