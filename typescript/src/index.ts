import { Character,ITracker } from "./character.js";

class Tracker implements ITracker {
    moving(character: Character, locNew: string) {
        console.log(`${character.name} moving from ${character.location} to ${locNew}`);
    }
}

let jean = new Character("Jean NEIGE",2)
//Character c = new Character("Jean NEIGE",2)
let tracker = new Tracker()
console.log(tracker.moving)
jean.trackedBy(tracker)
jean.location = "Hiverchut"
jean.move(400,300)

 console.log(jean)