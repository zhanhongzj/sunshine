import { DataType, ActionType } from './type';
import { produce } from 'immer';

const initState: { listData: DataType[]; loading: boolean } = {
  listData: [],
  loading: false,
};
const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionType.GetDataDone:
      return produce(state, (draft) => {
        const { data } = action.payload;
        draft.listData = data;
      });
    case ActionType.SetLoading:
      return produce(state, (draft) => {
        draft.loading = action.payload;
      });
    case ActionType.ClearData:
      return produce(state, (draft) => {
        draft.listData = [];
      });
    default:
      return state;
  }
};
export default reducer;
