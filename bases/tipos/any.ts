(()=>{

    let avenger: any = '123';
    let exists;
    let power;

    avenger = 'Dr strange';
    console.log(  (avenger as string).charAt(0));

    avenger = 150.398;
    console.log( (<number>avenger).toFixed(2));
    
    console.log(exists);
    console.log(power);
    
    

})()