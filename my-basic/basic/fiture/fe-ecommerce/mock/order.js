import Mock from 'mockjs';
import { sendList } from './utils';

const orderData = Mock.mock({
  result: 1,
  'data|20': [
    {
      orderNo: '@id',
      'userId|+1': 100,
      tmlCode: '@last',
      producPrice: Math.random(),
      'orderCount|1-50': 32,
      successCount: 123,
      orderAmount: 123,
      'orderStatus|0-3': 3,
      payDate: '@datetime',
      createDate: '@datetime',
    },
  ],
});

export default {
  'GET /order/list.json': sendList(orderData),
};
