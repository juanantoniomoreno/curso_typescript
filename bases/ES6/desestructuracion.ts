(()=>{

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean,
        poder: number
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    //const { poder, vision } = avengers;
    //console.log( poder.toFixed(2), vision.toUpperCase()  );

    const printAvenger = ({ ironman, ...rest }: Avengers ): void => {
        console.log( ironman, rest );
    }

    //printAvenger( avengers );

    //const avengersTupla: [string, boolean, number] = ['Spiderman', true, 1000];
    const avengersArr: string[] = ['Cap. America', 'Ironman', 'Hulk'];
    
    //const [character, , value] = avengersTupla;
    const [capitanAmerica, ironman, ] = avengersArr;

    //console.log({ character, /* isReal */ value });
    console.log({ capitanAmerica, ironman });
    
    

})()