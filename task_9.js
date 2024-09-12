let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];


names.forEach(function(name) {
    console.log(name);
});


let upperCaseNames = names.map(function(name) {
    return name.toUpperCase();
});
console.log(upperCaseNames);


let longNames = names.filter(function(name) {
    return name.length > 3;
});
console.log(longNames);
