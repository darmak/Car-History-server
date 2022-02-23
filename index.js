import express from "express";
import cors from 'cors';
import path from 'path';
import clientRoutes from './routes/client.routes.js';
import carRoutes from './routes/car.routes.js';
import bodyParser from 'body-parser';

const __dirname = path.resolve();

const _PORT = process.env.PORT ?? 5000;
const app = express();

async function start() {
    try {
        app.listen(_PORT, () => {
					console.log("Server has been started on " + _PORT + " port");
        });
    } catch (e) {
        console.log(e);
    }
}

app.use(
    cors({
        origin: "http://localhost:3000",
        preflightContinue: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'));
app.use(express.static(path.resolve(__dirname, "static")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(clientRoutes);
app.use(carRoutes);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('is working...!!!!');
});

start();