import { DataTypes } from 'sequelize';
import { sequelize } from '../models/index.js';
import { Cars } from './cars.js';
import { CarModels } from './carModels.js';

export const CarBrands = sequelize.define('car_brands', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  brand: { type: DataTypes.STRING, unique: true, allowNull: false }
});

CarBrands.hasMany(Cars);
Cars.belongsTo(CarBrands);

CarBrands.hasMany(CarModels);
CarModels.belongsTo(CarBrands);
