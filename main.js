
// class humano{
//     static name = null;
//     constructor(){
        
//     }
//     static getinstace(){
//         return (name instanceof Object) ? name : new humano();
//     }
//     saludar(){
//         return `HOLA COMO ESTAS`;
//     }
// }

// console.log(humano.getinstace());





class baso{
    constructor({...arg}){
        this.diametro = arg.diametro;
        this.alto = arg.alto;
        this.material = arg.material;
    }
    llenar(p1=''){
        return `El vaso esta lleno ${(p1) ? `de ${p1} su calse es baso` : `de la calse baso` }`;
    }
    vaciar(){
        return `El vaso esta vacio`;
    }
}
class basoVidrio extends baso{
    constructor({...arg}){
        super({...arg});
        this.estampado = arg.estampado;
    }
    llenar(p1=''){
        return `El vaso esta lleno ${(p1) ? `de ${p1} su calse es basoVidrio` : `de la calse basoVidrio` }`;
    }
    get getllenarBaso(){
        return super.llenar();
    }
}
class basoPorcelana extends basoVidrio{
    constructor({...arg}){
        super({...arg});
    }
    llenar(){
        return super.getllenarBaso;
    }
}
const datos = {
    diametro: "Cudrado",
    alto: "25 cm",
    material: "Porcelana",
    estampado: "Luna",
}
const obj = new basoPorcelana(datos);
console.log(obj);
console.log(obj.llenar('Agua'));







// class baso{
//     constructor(...arg){
//         this.diametro = arg[0];
//         this.alto = arg[1];
//         this.material = arg[2];
//     }
//     set setMaterial(p1){
//         this.diametro = p1;
//     }
//     get getMaterial(){
//         return this.diametro;
//     }
//     llenar(...arg){
//         return `El baso esta lleno de ${arg}`;
//     }
//     vaciar(){
//         return `El baso esta vacio`;
//     }
// }
// const obj = new baso("Circular","25 cm","Porcelana");


// console.log(obj.getMaterial);
// // obj.setMaterial = "Cuadrado";
// // console.log(obj.getMaterial);
// console.log(obj);
