interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}
class UserSummary {
    public id: number;
    public name: string;
    public city: string;
    public companyName: string;
    public contactInfo: string;

    public constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.city = user.address.city;
        this.companyName = user.company.name;
        this.contactInfo = `Email: ${user.email}, Phone: ${user.phone}`;
    }
}
async function fetchUser(userId: number): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        throw new Error(`ERROR during fetching user: ${response.status}`);
    }
    return response.json() as Promise<User>;
}

fetchUser(8)
    .then(user => {
        const summary = new UserSummary(user);
        console.log(summary);
    })
    .catch(error => console.error(error));
