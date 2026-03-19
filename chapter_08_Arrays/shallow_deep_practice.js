let original = { name: "Hemanth", address: { city: "Hyderabad" } };
let shallowCopy = { ...original };

shallowCopy.address.city = "Delhi";
shallowCopy.name = 'bhavya';
console.log(original.address.city); // "Delhi" (changed in both!)
console.log(original.name); // "Hemanth" (no change in original, only nested objects changes)


// shallow copy
// copies only one level deep, nested objects/arrays are still linked to the original

// Deep copy
// duplicates all nested objects and arrays, so the copy is completely independent.
