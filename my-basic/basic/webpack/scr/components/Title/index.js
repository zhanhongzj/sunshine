import './index.less';
import styles from './index.less';

export const Title = (text)=>{
  console.log(styles);
  const ele = document.createElement('h1');
  ele.classList.add('title');
  ele.textContent = text;
  document.body.append(ele);
};