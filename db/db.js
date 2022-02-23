import PG from "pg";
const { Pool } = PG;

export const db = new Pool({
	user: "postgres",
	password: "21081915omgQ@",
	host: "localhost",
	port: 5432,
	database: "car_history"
});