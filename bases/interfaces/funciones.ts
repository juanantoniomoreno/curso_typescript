(() => {

    //INTERFACES A FUNCIONES

    //Declaramos la interfaz
    interface addTwoNumbers {

        //Le decimos que va a recibir dos parámetros y retornará un number
        (a: number, b: number): number;
    }

    //Declaro una función del tipo de la interfaz
    let addNumbersFunction: addTwoNumbers;

    addNumbersFunction = (a: number, b: number ) => 10;



})()