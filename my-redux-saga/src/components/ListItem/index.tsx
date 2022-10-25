import React, { useContext } from 'react';
import { Button, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { Actions } from '../../redux/List/actions';

// import { StoreContext } from '../../App';

function ListItem(props: { value: any }) {
  // const store = useContext(StoreContext);
  const dispatch = useDispatch();
  const { value } = props;
  const handleDelete = () => {
    // store.dispatch({type:'list-DELETE',payload:value.index});
    // dispatch({type:'list-DELETE',payload:value.index});
    dispatch(Actions.deleteItem({ idex: value.index }));
  };
  return (
    <>
      <div style={{ marginTop: 20 }}>
        <Space size={10}>
          <span>{value.value}</span>
          <Button onClick={handleDelete}>删除</Button>
          <Button>更新</Button>
        </Space>
      </div>
    </>
  );
}

export default ListItem;
