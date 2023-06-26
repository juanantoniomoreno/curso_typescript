(()=>{

    const hero: string = 'Flash';

    const returnName = ():string => hero;

    const activateBatSignal = ():string => 'Batiseñal';

    console.log(typeof activateBatSignal);

    const heroName: string = returnName();
    


})()