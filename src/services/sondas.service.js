import Factory from "../models/Factory.js";
import config from "../config.js";
import { validateSonda, validateId } from "../validate/schema.js";

class SondasService{
    constructor(){
        this.model = Factory.get(config.PERSISTENCE)
    }

    addDatosSonda = async(data) => { 
        const validate = validateSonda(data)
        const newSonda = validate.error ? validate.errorMessage : await this.model.addDatosSonda(data)
        return newSonda
    }

    getAllSondas = async() => {
        return await this.model.getAllSondas()
    }

    getSondaById = async(id) => {
        const validate = validateId(parseInt(id))
        const sondasById = validate.error ? validate.errorMessage : await this.model.getSondaById(id)
        return sondasById
    }

    getEstadisticas = async() => {
        return await this.model.getEstadisticas()
    }
}

export default SondasService