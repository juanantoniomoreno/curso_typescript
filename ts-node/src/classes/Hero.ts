import powers from '../data/powers';

export class Hero {
    constructor (
        public name: string,
        public powerId: number,
        public age: number
    ){}

    //El Método regresa STRING y AÑADIENDO ? evitamos el error si viene UNDEFINED
    //SI PONGO ! le digo que SIEMPRE LO VA A ENCONTRAR
    get power(): string { //return string
        return powers.find( power => power.id === this.powerId )?.desc || 'not found';
    }
}

export class Hero2{}
export class Hero3{}
export class Hero4{}