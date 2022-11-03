import React, { useState, useContext } from 'react';
import { Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { Actions } from '../../redux/List/actions';

// import { StoreContext } from '../../App';

import './index.css';

function Todo() {
  // const store = useContext(StoreContext);
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleAdd = () => {
    // store.dispatch({ type: 'list-ADD', payload: value });
    dispatch(Actions.addItem({ value }));
    setValue(undefined);
    // const value = inputRef?.current?.value;
  };
  const handleTest = () => {
    dispatch({ type: 'TEST' });
  };
  return (
    <div className='todo-container'>
      <Input value={value} style={{ width: 200, marginRight: 10 }} onChange={handleChange} />
      <Button onClick={handleAdd}>新增</Button>
      <Button onClick={handleTest}>test</Button>
    </div>
  );
}
export default Todo;
