

let person = {
    name: "Betty",
    age: 12,
    city: "Abuja",
    country: "Nigeria"
};


for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}
