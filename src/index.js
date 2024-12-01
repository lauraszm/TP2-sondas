import express from 'express'
import SondasRouter from './routes/sondas.router.js'
import config from './config.js'

const app = express()
const PORT = config.PORT

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/sondas", new SondasRouter().start())

app.listen(PORT, () =>
    console.log(`Servidor corriendo en: http://localhost:${PORT}`)
);

app.on("Error", (err) =>
    console.error("Hubo un problema con el servidor", err)
);