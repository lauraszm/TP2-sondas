import SondasMemModel from "./DAO/sondas.model.js";

class Factory {
    static get(persistence){
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor")
                return new SondasMemModel()        
            default:
                console.log("Persistiendo en la memoria del servidor - OPCION DEFAULT")
                return new SondasMemModel();
        }
    }
}

export default Factory