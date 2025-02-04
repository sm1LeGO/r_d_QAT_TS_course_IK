const person = {
    _name: "Ilja",
    _age: 34,
    address: {
        _city: "Jurmala",
        _country: "Latvia",
        get city() {
            return this._city;
        },
        set city(newCity) {
            this._city = newCity;
        },
        get country() {
            return this._country;
        },
        set country(newCountry) {
            this._zip = newCountry;
        }
    },
    get name() {
        return this._name;
    },
    set name(newName) {
        this._name = newName;
    },
    get age() {
        return this._age;
    },
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Age must be positive.");
        }
    },
    getFullInfo() {
        return `${this.name}, ${this._age} years old, lives in ${this.address.city}, Country: ${this.address.country}.`;
    }
};

console.log(person.getFullInfo());
person.name = "Marina";
person.age = 30;
person.address.city = "Talinn";
person.address.country = "Estonia";
console.log(person.getFullInfo());
