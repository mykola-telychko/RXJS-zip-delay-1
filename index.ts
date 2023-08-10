import { delay } from 'rxjs/operators';
import { of, zip } from 'rxjs';

const srcOne = of('Hello');
const srcTwo = of('World!');
const srcThree = of('Goodbye');
const srcFour = of('World!');
//wait until all observables have emitted a value then emit all as an array
const example = zip(
  srcOne,
  srcTwo.pipe(delay(1000)),
  srcThree.pipe(delay(2000)),
  srcFour.pipe(delay(3000))
);
//output: ["Hello", "World!", "Goodbye", "World!"]
const subscribe = example.subscribe((val) => console.log(val));
