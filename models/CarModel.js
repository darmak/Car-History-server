import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import { Car } from './Car.js';

export const CarModel = sequelize.define('carModels', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  model: { type: DataTypes.STRING, unique: true, allowNull: false }
});

CarModel.hasMany(Car);
Car.belongsTo(CarModel);
