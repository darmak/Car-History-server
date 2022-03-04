import { Sequelize } from 'sequelize';
import config from 'config';
const postgres = config.get('postgres');

export const sequelize = new Sequelize(postgres);
