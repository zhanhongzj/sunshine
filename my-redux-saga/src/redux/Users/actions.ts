import { ActionType } from './type';

const initData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function createAction(action: any, payload?: any) {
  return {
    type: action,
    payload: payload,
  };
}

export const Actions = {
  getData: () => createAction(ActionType.GetData),
  getDataDone: (v: any) => createAction(ActionType.GetDataDone, { data: v }),
  setLoading: (v: any) => createAction(ActionType.SetLoading, v),
  clearData: () => createAction(ActionType.ClearData),

  // thunk 异步写法 - 缺点就是 action混乱，有些传函数，有些传函数执行后返回值，且api请求的逻辑都需要写到action creator中，不易维护
  // getAsyncData:(dispatch:any)=>{
  //   dispatch(createAction(ActionType.SetLoading,true));
  //   setTimeout(()=>{
  //     dispatch(createAction(ActionType.GetDataDone,{data:initData}));
  //     dispatch(createAction(ActionType.SetLoading,false));
  //   },3000)
  // }
};
