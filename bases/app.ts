// EJERCICIO CRERAR INTERFACES

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatimovil = ( auto: Auto ) => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Person {
  reir?: boolean,
  comer?: boolean,
  llorar?: boolean
}

const guason: Person = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Person ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface getLengthFunction {
  ( a: string[] ): number
}

const ciudadGotica: getLengthFunction = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

  interface PersonInterface {
    name: string,
    age: number,
    sexo: string,
    civilState: string
    imprimirBio(): void;
  }

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements PersonInterface {

  public name: string;
  public age: number;
  public sexo: string;
  public civilState: string;

  imprimirBio(): void {
    console.log('Juan Moreno');
  }
}