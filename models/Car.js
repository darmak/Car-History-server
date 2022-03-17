import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import { History } from './History.js';

export const Car = sequelize.define('cars', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  mileage: { type: DataTypes.INTEGER, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
  vin: { type: DataTypes.STRING(17), allowNull: false, unique: true }
});

Car.hasMany(History);
History.belongsTo(Car);
