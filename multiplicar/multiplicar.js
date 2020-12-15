//requires

const fs = require('fs');
const colors = require('colors');


//FACTORIZACIOON
function factorial(n){
    var total=1;
    for(i=1;i<=n;i++){
        total=total*i
    }
    return total
}

//FUNCION IMPRIMIR FACTORIZACION
function imprimirfactorizacion(numerofactorizado){
    var numeros=`!${numerofactorizado} = `;
    for(var i=1; i <=numerofactorizado; i++){
if(i!=numerofactorizado)
numeros+=i+' X ';
else
numeros+=i+` = ${factorial(numerofactorizado)}`
    }
    return numeros;
}








let listarTabla = ( limite = 10) => {

    console.log(`TABLA FACTORIAL DE LIMITE ${limite}`.red);
    for(var i= 1; i<=limite;i++){
        console.log(imprimirfactorizacion(i));
    }

}




let crearArchivo = ( limite = 10) => {
    return new Promise((resolve, reject) => {

        

        let data = `TABLA FACTORIAL DE LIMITE ${limite}\n`;
      

        for (let i = 0; i <= limite; i++) {
            data+=(`${imprimirfactorizacion(i)}\n`)
        }


        fs.writeFile(`tablas/tabla-${limite}.txt `, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${limite}.txt`);
        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla

}