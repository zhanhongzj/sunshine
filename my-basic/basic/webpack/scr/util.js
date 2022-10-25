import zznh from './imgs/zznh.png'

export const formateDate = ()=>{
  console.log('time formate');
}

export const Image = ()=>{
  const ele = document.createElement('img');
  ele.src = require('./imgs/zznh.png');

  document.body.append(ele);
}