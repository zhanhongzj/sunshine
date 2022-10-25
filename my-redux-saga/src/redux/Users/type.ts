export type DataType = {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
};

export enum ActionType {
  GetData = 'users-GET_DATA',
  GetDataDone = 'users-GET_DATA_DONE',
  SetLoading = 'users-SET_LOADING',
  ClearData = 'users-CLEAR_DATA',
}
