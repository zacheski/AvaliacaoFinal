const consertos = require('./consertos');


var listaPronto = consertos.map (consertos => {
        if (consertos.pronto === true){
                
            return `O aparelho ${consertos.aparelho} está pronto.`
        }
    }
)
        .filter (notUndefined => notUndefined !== undefined);
    
var listaImpronto = consertos.map (consertos => {
        if (consertos.pronto === false){
            
            return `O aparelho ${consertos.aparelho} não está pronto.`
        } 
    }
)       .filter (notUndefined => notUndefined !== undefined);

//console.log(listaPronto);
//console.log(listaImpronto);