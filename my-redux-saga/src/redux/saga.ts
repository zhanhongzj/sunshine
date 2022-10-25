import { all, fork } from 'redux-saga/effects';

import usersSaga from './Users/saga';

export default function* rootSaga(): Generator {
  yield all([fork(usersSaga)]);
}
