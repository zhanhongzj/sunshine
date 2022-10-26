import Mock from 'mockjs';
import { sendList, sendResult } from './utils';

const usersList = Mock.mock({
  'data|5-10': [
    {
      id: '@id',
      name: '@name',
      nickName: '@last',
      phone: /^1[34578]\d{9}$/,
      'age|11-99': 1,
      address: '@county(true)',
      isMale: '@boolean',
      email: '@email',
      createTime: '@datetime',
    },
  ],
});

export default {
  'POST /login': sendResult({ success: true }, 30),
  'POST /users': sendList(usersList),
};
