import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import { Car } from './Car.js';

export const User = sequelize.define(
  'users',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    hash_password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'user' }
  },
  { paranoid: true }
);

User.hasMany(Car);
Car.belongsTo(User);
