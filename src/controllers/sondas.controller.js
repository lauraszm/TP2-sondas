import SondasService from "../services/sondas.service.js";

class SondasController{
    constructor(){
        this.service = new SondasService()
    }

    addDatosSonda = async(req,res) => {
        const data = req.body
        const nuevoDatoSonda = await this.service.addDatosSonda(data)
        res.status(200).send(nuevoDatoSonda)     
    }

    getAllSondas = async(req,res) => {
        const allSondas = await this.service.getAllSondas()
        res.status(200).send(allSondas)
    }

    getSondaById = async(req,res) => {
        const {id} = req.params
        const sondaById = await this.service.getSondaById(id)
        res.status(200).send(sondaById)
    }

    getEstadisticas = async(req,res) => {
        const estadisticas = await this.service.getEstadisticas()
        res.status(200).send(estadisticas)
    }
}

export default SondasController