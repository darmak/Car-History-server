import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import { Cars } from './Car.js';

export const CarModels = sequelize.define('carModels', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  model: { type: DataTypes.STRING, unique: true, allowNull: false }
});

CarModels.hasMany(Cars);
Cars.belongsTo(CarModels);
