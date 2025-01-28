// Alcance Global 
var globalVar = "Variable global ";
let globalLet = "Variable global, pero alcance con LET";
const globalConst = "Constante global";

{
    // Alcance de Bloque
    var blockVar = "variable var de alcance de bloque";
    let blockLet = "variable let de alcance de bloque";
    const blockConst = "Constante de alcance de bloque";
}

// Alcance global
console.log(globalVar); // salida: "variable global"
console.log(globalLet); // salida: "Variable global, pero alcance con LET"
console.log(globalConst); // salida: "Constante global"

//Alcance de bloque
console.log(blockVar);  //salida: variable var de alcance de bloque
console.log(blockLet);  //Error
console.log(blockConst); //Error

function show() {
    var functionVar = "Variable var con alcance de función";
    let functionLet = "Variable let con alcance de bloque";
    const functionConst = "Constante con alcance de bloque";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError

