import { produce } from 'immer';
import { ActionType } from './type';

const initeState = {
  items: [],
};

const reducer = (state: any = initeState, action: any) => {
  switch (action.type) {
    case ActionType.AddItem:
      return produce(state, (draft: any) => {
        const { value } = action?.payload;
        draft.items.push(value);
      });
    case ActionType.DeleteItem:
      return produce(state, (draft: any) => {
        const {index} = action?.payload;
        draft.items.splice(index, 1);
      });
    case ActionType.ClearItems:
      return produce(state, (draft: any) => {
        draft.items = [];
      });
    default:
      return state;
  }
};
export default reducer;
