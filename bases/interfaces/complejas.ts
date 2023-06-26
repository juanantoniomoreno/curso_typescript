(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress( id: string ): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: '30110',
            city: 'Murcia'
        },
        getFullAddress(id: string ) {
            return this.address.city;
        },
    }

    const client2: Client = {
        name: 'Isa',
        age: 45,
        address: {
            id: 120,
            zip: '30006',
            city: 'Puente'
        },
        getFullAddress(id: string ) {
            return this.address.city;
        },
    }

    



})()