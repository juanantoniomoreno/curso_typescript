(()=>{

    const fullName = ( firstName: string, lastName?: string, upper: boolean = false ): string => {

        if(upper){
            return `${firstName || '- No Name -'} ${lastName || '- No Lastname -'}`.toUpperCase();
        } else {
            return `${firstName || '- No Name -'} ${lastName || '- No Lastname -'}`;
        }
    }

    const name: string = fullName('Tonty', 'Shark', true );

    console.log({ name });
    


})()