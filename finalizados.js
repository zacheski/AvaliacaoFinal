const consertos = require('./consertos');
 
consertos.forEach(conserto => {
   
    if  
        (conserto.pronto === true) {
            Total = null;

        conserto.valores.forEach(valor => {
            Total += valor
        })

        console.log(`
          Aparelho: ${conserto.aparelho}
          Itens Consertados: 
          * ${conserto.itensConsertados[0]}
          * ${conserto.itensConsertados[1]}
          * ${conserto.itensConsertados[2]}
          Valor Total: ${Total},00 $
        `)
        }
    
    else
        console.log(`____________________________________________________`)
    }
);