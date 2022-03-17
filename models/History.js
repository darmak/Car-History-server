import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const History = sequelize.define('histories', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  mileage: { type: DataTypes.INTEGER, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  date: { type: DataTypes.DATE }
});
