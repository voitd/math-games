import { nod, getRandomNum } from '../math.js';
import gameEngine from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getQstAnsw = () => {
  const x = getRandomNum();
  const y = getRandomNum();
  const qst = `${x} ${y}`;
  const answ = String(nod(x, y));
  return [qst, answ];
};

console.log(rule);
export default gameEngine(getQstAnsw);
