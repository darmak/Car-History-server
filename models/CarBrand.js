import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import { Cars } from './Car.js';
import { CarModels } from './CarModel.js';

export const CarBrands = sequelize.define('carBrands', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  brand: { type: DataTypes.STRING, unique: true, allowNull: false }
});

CarBrands.hasMany(Cars);
Cars.belongsTo(CarBrands);

CarBrands.hasMany(CarModels);
CarModels.belongsTo(CarBrands);
