import { ActionType } from './type';

function createAction(action: any, payload?: any) {
  return {
    type: action,
    payload: payload,
  };
}

export const Actions = {
  addItem: (v:any) => createAction(ActionType.AddItem, v),
  deleteItem: (v:any) => createAction(ActionType.DeleteItem, v),
  clearItems: () => createAction(ActionType.ClearItems),
};
