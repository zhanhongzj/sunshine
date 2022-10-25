import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import UserList from '../../components/UserList';
import Header from '../../components/Header';
import { Actions } from '../../redux/Users/actions';

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
const UsersPage = () => {
  const disptch:any = useDispatch();
  useEffect(() => {
    // disptch(Actions.getData({ data: initData }));
    // disptch(Actions.getAsyncData);

    disptch(Actions.getData());
    return ()=>{
      disptch(Actions.clearData());
    }
  }, []);
  return (
    <>
      <Header />
      <UserList />
    </>
  );
};
export default UsersPage;
