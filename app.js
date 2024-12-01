const argoments = process.argv
console.log(argoments);


import { Names } from './names.js';
import { hobbies as _hobbies } from './hobbies.js';

const Alessio = () => {
    const firstName = Names().firstname;
    const lastName = Names().lastname;
    const fullName = { firstName, lastName }

    const firstHobby = _hobbies().hobbyOne;
    const secondHobby = _hobbies().hobbyTwo;
    const thirdHobby = _hobbies().hobbyThree;
    const hobbies = { firstHobby, secondHobby, thirdHobby }
    return { fullName, hobbies }
}

console.log(Alessio());