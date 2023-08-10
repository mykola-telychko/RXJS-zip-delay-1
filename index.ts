import { delay } from 'rxjs/operators';
import { of, zip } from 'rxjs';

// Example 1: zip multiple observables emitting at alternate intervals
// https://www.learnrxjs.io/learn-rxjs/operators/combination/zip

const srcOne = of('Hello');
const srcTwo = of('World!');
const srcThree = of('Goodbye');
const srcFour = of('World!');

// wait until all observables have emitted a value then emit all as an array
// zip - wait all values with different delayed
const exampleSub = zip(
  srcOne,
  srcTwo.pipe(delay(1000)),
  srcThree.pipe(delay(2000)),
  srcFour.pipe(delay(3000))
);
const subscribe = exampleSub.subscribe((val) => console.log(val));
