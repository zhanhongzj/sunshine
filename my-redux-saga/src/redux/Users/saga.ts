import { ActionType } from './type';
import { Actions } from './actions';
import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';

import { Api } from '../../utils/index';

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
function* load(action: any): Generator {
  yield put(Actions.setLoading(true));
  const data = yield Api(initData,1000);
  yield put(Actions.getDataDone(data));
  yield put(Actions.setLoading(false));
}
// try {
// const app = yield call(apis.app.getApp, action.payload);}
// UI2.0画板背景色，因为是后端接口返回的配置项，所以以默认值作为深浅主题切换标识，如果用户自己设置了背景色则不匹配深浅主题

function* watchAppSagas(): Generator {
  yield takeLatest(ActionType.GetData, load);
}

export default function* appSagas(): Generator {
  yield all([fork(watchAppSagas)]);
}
