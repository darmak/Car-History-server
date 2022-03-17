import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import { Car } from './Car.js';
import { CarModel } from './CarModel.js';

export const CarBrand = sequelize.define('carBrands', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  brand: { type: DataTypes.STRING, unique: true, allowNull: false }
});

CarBrand.hasMany(Car);
Car.belongsTo(CarBrand);

CarBrand.hasMany(CarModel);
CarModel.belongsTo(CarBrand);
