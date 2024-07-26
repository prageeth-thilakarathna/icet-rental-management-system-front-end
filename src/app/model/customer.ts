export class Customer {
    customerId: number | undefined;
    public name: string | undefined;
    public contact: string | undefined;
    public city: string | undefined;

    constructor(name: string, contact: string, city: string) { 
        this.name = name;
        this.contact = contact;
        this.city = city;
    }
}