const fs = require('fs');
const colors = require('colors')

const crearArchivo = async(base=5, h=10, listar=false) => {
    
    try {
    
    
    let salida = ''
    let consola = ''
    let nombreArchivo = `tabla-${base}.txt`
    for (let i = 1; i <= h; i++) {
      let producto = base * i;
      salida += `${base} x ${i} = ${producto}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${producto}\n`;
      
    }
    
    if(listar){
    console.log('===================='.green);
    console.log('    Tabla del:'.green,colors.blue(base) );
    console.log('===================='.green);
    console.log(consola)
    }
    
    
         
        fs.writeFileSync( `./salida/${nombreArchivo}`, salida )
        return  nombreArchivo
       
        
    } catch (err) {
        throw err;
    } 
    
}
    
    

module.exports = {
    crearArchivo
}

