function sumarCadenas(cadena){
    let suma = 0;
    for(let i =0;i<cadena.length;i++){
        if(cadena[i]==","){
            suma+=0;
        }
        else{
            suma +=+cadena[i];
        }
    }
    return suma;

}
export default sumarCadenas;