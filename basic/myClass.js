class Animal {
    constructor(name){
        this.name = name
    }
    getAnimal(){
        return this.name;
    }

    setAnimal(name){
        this.name = name;
    }
}

const myAnimal = new Animal('Bibya');
const myAnimal2 = new Animal ('Tiger'); 

console.log(myAnimal); // Bibya
console.log(myAnimal2); // Tiger
