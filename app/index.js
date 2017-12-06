// import addStuff, {subtract, multiply} from './calc';

//Imports all functions in specified file and stores all functions in object to for later use
import * as math from "./calc";

// Alias function name as something else to call use alias name ie sub(5,3)
// import { subtract as sub } from './calc';

console.log('math: ', math);
console.log('5 + 7 = ', math.default(5, 7));
console.log('8 - 9 = ', math.subtract(8, 9));
console.log('9 x 10 = ', math.multiply(9, 10));
