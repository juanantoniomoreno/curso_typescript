(()=>{

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}

        public abstract toMute():string;

        
            
    }

    class Xmen extends Mutante{

        public salvarMundo(): string {
            return 'Salvar el Mundo';
        }

        public toMute(): string {
            return 'Muto a hombre X'
        }
    };

    class Villian extends Mutante{

        public conquerWorld(): string {
            return 'Mundo Conquistado'
        }

        public toMute(): string {
            return 'Muto a Villano'
        }
    };

    const wolverine: Xmen = new Xmen( 'Wolverine', 'Logan');
    const magneto: Villian = new Villian('Magneto', 'Magnus');

    /* console.log( wolverine.toMute() );
    console.log( magneto.toMute() ); */

    const printName = ( character: Mutante ) => {
        console.log( character.realName );
    }

    //printName( magneto );
    




})()