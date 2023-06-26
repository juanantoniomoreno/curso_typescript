(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    // ? enum { aquaman = 0 }

    enum Power {
      aquaman = 0,
      batman = 1,
      flash = 5,
      superman = 100
    }

    const fuerzaFlash: Power = Power.flash;
    const fuerzaSuperman: Power = Power.superman;
    const fuerzaBatman: Power = Power.batman;
    const fuerzaAcuaman: Power = Power.aquaman;

    console.log(fuerzaAcuaman, fuerzaBatman, fuerzaFlash, fuerzaSuperman);
    
  
    // Retorno de funciones
    /* function activar_batiseñal(){
      return 'activada';
    } */

    const activar_batiseñal = ():string => 'activada';

    const pedir_ayuda = ():void =>  console.log('Auxilio !!');
    
  
    /* function pedir_ayuda(){
      console.log('Auxilio!!!');
    } */
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );

    enum enumeracion {
      a=10,
      b,
      c=9,
      d
    }

    let sth: enumeracion = enumeracion.d;
    console.log(sth);
    
  })()
  
  