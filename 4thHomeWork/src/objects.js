const complexObject = {
    name: "Ilja K.",
    age: 34,
    address: {
        country: "Latvia",
        street: "Brivibas str.",
        city: "Riga",
        postalCode: "LV-0000"
    },
    hobbies: ["hockey", "cycling", "coding", "gaming"]
};

const clone1 = Object.assign({}, complexObject);
const clone2 = { ...complexObject };

clone1.name = "Elijah K.";
clone1.address.street = "Lidotaju str.";
clone1.hobbies = ["hockey", "cycling"];
clone2.name = "Elijah2";
clone2.address.city = "Jurmala";
clone2.hobbies = "diving";

console.log(clone1, complexObject);
console.log("----------\n");
console.log(clone2, complexObject);

const clone3 = JSON.parse(JSON.stringify(complexObject));
clone3.name = "Ilias K.";
clone3.address.city = "Madrid";
clone3.hobbies = ["coding", "gaming"];

console.log("----------\n");
console.log(clone3, complexObject);

console.log(complexObject === clone1);
console.log(complexObject.street === clone1.street);
console.log(typeof complexObject, typeof clone3.name);
