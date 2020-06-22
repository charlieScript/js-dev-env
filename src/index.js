import '../src/style.css'
import numeral from "numeral";


const courseValue = numeral(1000).format('$0,0.00');
// debugger; for debugging
console.log(`I would have paid ${courseValue} for this awesome course`);