class Key {
   private signature: number
    constructor() {
        this.signature = Math.random()
    }
    getSignature(): number {
        return this.signature
    }
}

class Person {
    constructor(private key: Key) {
        this.key = key;
    }

    getKey(): Key {
    return this.key
}
}
abstract class House {
    protected door: boolean = false;
    protected tenants: Person[] = [];

    constructor(protected key: Key) {
        this.key = key;
    }
    
    comeIn(person: Person) {
        if (!this.door) {
            return
        }
        this.tenants.push(person)
        
    }
    abstract openDoor(key: Key): void;
    
}

class MyHouse extends House {

    openDoor(key: Key) {
        if (this.key.getSignature()===key.getSignature()) {
            this.door = true;
        }
        return
    }
}



const key = new Key();
console.log(key);

const house = new MyHouse(key);
console.log(house);

const person = new Person(key);
console.log(person);

house.openDoor(person.getKey());
console.log(house.openDoor(person.getKey()));

house.comeIn(person);
console.log(house.comeIn(person));


export {};