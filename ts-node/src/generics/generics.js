//GENÉRICO
// Recibe cualquier tipo de dato y devuelve el mismo tipo
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PI = exports.genericFunctionArrow = exports.genericFunction = exports.printObject = void 0;
    const printObject = (argument) => {
        console.log(argument);
    };
    exports.printObject = printObject;
    //Para convertir a Tipo GENÉRICO añadimos <T> en el NOMBRE y ARGUMENTO 
    function genericFunction(argument) {
        return argument;
    }
    exports.genericFunction = genericFunction;
    const genericFunctionArrow = (argument) => argument;
    exports.genericFunctionArrow = genericFunctionArrow;
    exports.PI = Math.PI;
});
