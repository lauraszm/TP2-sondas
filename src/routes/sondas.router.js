import SondasController from '../controllers/sondas.controller.js'
import express from 'express'

class SondasRouter{
    constructor(){
        this.controller = new SondasController()
        this.router = new express.Router()
    }

    start(){
        this.router.post("/newDatosSonda", this.controller.addDatosSonda)
        this.router.get("/allSondas", this.controller.getAllSondas)
        this.router.get("/sondaById/:id", this.controller.getSondaById)
        this.router.get("/estadisticas", this.controller.getEstadisticas)
        return this.router
    }
}

export default SondasRouter