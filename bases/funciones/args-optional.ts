(()=>{

    const fullName = ( firstName?: string, lastName?: (string) ): string => {

        return `${firstName || '- No Name -'} ${lastName || '- No Lastname -'}`
    }

    const name: string = fullName('Tonty' );

    console.log({ name });
    


})()