const fs= require('fs');
const { resolve } = require('path');


let crearArchivo=(base) => { 
    return new Promise((resolve,reject) =>{
        //////////
        let data='';

for (let index = 0; index <=10; index++) {
    data+=(`${base} * ${index}= ${base * index}\n`)
    
}

////

fs.writeFile('tabla-1.txt', data, (err) => {
  if (err) 
  reject(err);
  else

  resolve(`tabla-${base}.txt`);
});

//////////////
    })
}

module.exports={
    crearArchivo
}
/////////////////
