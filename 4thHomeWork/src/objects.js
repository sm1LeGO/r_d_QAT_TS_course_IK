let complexObject = {
    name: "Ilja Kravecs",
    age: 34,
    address: {
        country: "Latvia",
        street: "Brivibas str.",
        city: "Riga",
        postalCode: "LV-0000"
    },
    hobbies: ["hockey", "cycling", "coding", "gaming"],
    displayInfo: function() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Address: " + this.address.country + ", " + this.address.street + ", " + this.address.city + ", " + this.address.postalCode);
        console.log("Hobbies: ");
        this.hobbies.forEach(function(hobby) {
            console.log("- " + hobby);
        });
    }
};

complexObject.displayInfo();
