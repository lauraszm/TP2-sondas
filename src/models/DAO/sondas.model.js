class SondasMemModel {
    constructor(){
        this.sondas = [
            {
                id: 1,
                temperatura: 34,
                fechaYHora: "2024-12-01T19:14:58.178Z"
            },
            {
                id: 2,
                temperatura: 10,
                fechaYHora: "2024-12-01T19:14:58.178Z"
            }
        ]
        this.estadisticas = {
            cantidadTotalMuestras: 0,
            temperaturaSondas: {
                1: { cantidad: 0, promedio: 0 },
                2: { cantidad: 0, promedio: 0 },
                3: { cantidad: 0, promedio: 0 },
                4: { cantidad: 0, promedio: 0 },
                5: { cantidad: 0, promedio: 0 },
            }
        }
    }

    addDatosSonda = async(data) => { 
        const fechaYHoraActual = new Date()
        data.fechaYHora = fechaYHoraActual
        this.sondas.push(data)
        return data;    
    }

    getAllSondas = async() => {
        return await this.sondas;
    }

    getSondaById = async(id) => {
        const allSondas = await this.getAllSondas()
        const sondasById = allSondas.filter(s => s.id == id)
        return sondasById
    }

    getEstadisticas = async() => {
        const allSondas = await this.getAllSondas()
        this.estadisticas.cantidadTotalMuestras = allSondas.length
        const totalPorSonda = {
            1: { cantidad: 0, total: 0 },
            2: { cantidad: 0, total: 0 },
            3: { cantidad: 0, total: 0 },
            4: { cantidad: 0, total: 0 },
            5: { cantidad: 0, total: 0 },
        }
        allSondas.forEach(sonda => {
            const sondaBuscada = totalPorSonda[sonda.id]
            sondaBuscada.cantidad++
            sondaBuscada.total += sonda.temperatura
        })
        for (let i = 1; i < 6; i++){
            if(totalPorSonda[i].cantidad > 0){
                this.estadisticas.temperaturaSondas[i].cantidad = totalPorSonda[i].cantidad
                this.estadisticas.temperaturaSondas[i].promedio = totalPorSonda[i].total / totalPorSonda[i].cantidad
            }
        }
        return await this.estadisticas;
    }
}

export default SondasMemModel