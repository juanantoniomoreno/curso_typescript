(()=>{

    class Avenger {
        constructor(
            public name: string, 
            public realName: string
        ){
            /* console.log('Contructor de Avenger llamado !!'); */
        }

        protected getFullName(): string{
            return `${ this.name } ( ${ this.realName } )`
        }
    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName);
            /* console.log( 'constructor xmen llamado' ); */
            
        }

        public getFullNameDesdeXmen(): void {

            console.log( super.getFullName() );
        }

        public get fullName() {
            return `${ this.name } ( ${ this.realName } )`;
        }

        public set fullName( name: string ) {

            /* if( name.length < 3 ){
                throw new Error( 'El nombre debe tener más de 3 letras');
            } */

            this.name = name;
        }

    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan', false);

    /* console.log( wolverine );

    console.log( wolverine.fullName ); */
    

    const newAvenger = new Xmen('Hola', 'Mundo', true);

    wolverine.fullName = 'Ju';


})()