
//?Los namespaces son como pequeñas clases donde exponemos sólo lo que necesitamos (Export)
//?Son Agrupadores Grupales
//? Muy usados en librerías y frameworks

namespace Validations {

    //*Hay que añadir la palabra EXPORT para poder verlo fuera

    export const validateText = ( text: string): boolean => {

        return (text.length > 3) ? true : false;
    }

    export const validateDate = ( myDate: Date ): boolean => {
        return ( isNaN( myDate.valueOf() ))
        ? false
        : true;
    }

}

console.log( Validations.validateText('Juan') );

