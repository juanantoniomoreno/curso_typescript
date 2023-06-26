(() => {
    //IMPLEMENTACIÓN DE INTERFACES EN CLASES

    //Interface xmen
    interface Xmen {
        name: string,
        realName: string,
        mutantPower( id: number ): string;
    }

    //Interface human
    interface Human {
        age: number;
    }

    //Para implementar la interface usamos IMPLEMENTS 
    class Mutant implements Xmen, Human {

        public age: number;
        public name: string;
        public realName: string;

        mutantPower( id: number ){
            return `${this.name} ${this.realName}`;
        }
    }

})()