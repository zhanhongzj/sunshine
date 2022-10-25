import './index.css';
import {formateDate,Image} from './util';
import {Title} from '@/components/Title'

formateDate();
Image();
Title('这是一个标题1');

// babel测试
// const a = 123;
// const sum = (x,y)=>x+y;
// console.log(a.length);
// console.log(sum(a.length,12));
// console.log(sum(a.length + 233345,12));