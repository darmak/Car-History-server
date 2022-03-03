import { DataTypes } from 'sequelize';
import { sequelize } from '../db/db.js';
import { Histories } from './histories.js';

export const Cars = sequelize.define('cars', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  mileage: { type: DataTypes.INTEGER, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
  vin: { type: DataTypes.STRING(17), allowNull: false, unique: true }
});

Cars.hasMany(Histories);
Histories.belongsTo(Cars);
