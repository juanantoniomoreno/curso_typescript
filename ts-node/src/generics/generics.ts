
//GENÉRICO
// Recibe cualquier tipo de dato y devuelve el mismo tipo

export const printObject = ( argument: any ) => {
    console.log( argument );
}

//Para convertir a Tipo GENÉRICO añadimos <T> en el NOMBRE y ARGUMENTO 
export function genericFunction<T>( argument: T):T {
    return argument;
}

export const genericFunctionArrow = <T>( argument: T ) => argument;

export const PI: number = Math.PI;