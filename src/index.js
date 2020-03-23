import { b } from './modules/a';
import './style/text1.less'
import png from './asserts/webpack.png'
import '@babel/polyfill';

const a = () => {
  console.log(1212232321);
};

const text2 = ['1', '2'];
text2.map((item) => {
  return item * 2;
})
console.log(png);
a();
b();