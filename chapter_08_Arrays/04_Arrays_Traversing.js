
let names = ['ram', 'shyam', 'kiran'];

for(let i=0;i<names.length; i++) {
    console.log(names[i]);
}

// for...of loop
for(const a of names) {
    console.log(a);
}

// for each loop
names.forEach((test, index) => {
    console.log(`${index}--${test}`)
})