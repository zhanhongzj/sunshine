import React, { useContext, useEffect, useState } from 'react';
import ListItem from '../ListItem';
import { Button } from 'antd';
// import { StoreContext } from '../../App';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Actions } from '../../redux/List/actions';


function List(props:any) {
  // const store = useContext(StoreContext);
  // const [items, setItems] = useState([]);
  // let unsubscribe  = store.subscribe(() => {
  //   console.log('监听中..',store.getState());
  //   setItems(store.getState().list);
  // })
  // useEffect(()=>{
  //   store.dispatch({type:'list-ADD',payload:'234'});
  // },[])

  // @ts-ignore
  const count = useSelector((state) => {return state?.list.count});
  const list = useSelector((state:any) => {return state?.list});
  // const test = useSelector((state:any) => {return state?.users.test});
  const items = useSelector((state:any) => state?.list?.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch({ type: 'list-CLEAR_ITEMS' });
    // props.onClear();
  };
  console.log('组件更新');
  return (
    <>
    <div>111{count}</div>
    {/* <div>{test}</div> */}
      {items?.map((v: React.Key | null | undefined, index: any) => (
        <ListItem key={v} value={{ id: index, value: v }} />
      ))}
      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
        <Button type='primary' onClick={handleClear}>
          清空
        </Button>
      </div>
    </>
  );
}
// const mapStateToProps = (state: any) => ({
//   items: state.list.items,
// });
// const mapDispatchToProps = (dispatch:any) => ({
//   onClear: () => {
//     // dispatch({ type: 'list-CLEAR' });
//     dispatch(Actions.clearItems());
//   },
// });
// export default connect(mapStateToProps,mapDispatchToProps)(List);
export default List;
