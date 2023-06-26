(()=>{

    type Avenger = {
        name: string;
        weapon: string;
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armonsuit'
    }

    const captainAmerica: Avenger = {
        name: 'Capitán América',
        weapon: 'Shield'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ironman, thor, captainAmerica];

    for (const avenger of avengers){
        console.log( avenger.name, avenger.weapon );
    }

    const numero:number = 10;
     
    if( numero >0 ){
     
      const numero:number = 10;
     
    }

    
})()