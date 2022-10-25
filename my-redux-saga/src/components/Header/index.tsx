import React from 'react';
import { NavLink } from 'react-router-dom';
import { Space } from 'antd';
import classNames from 'classnames';
import './index.css';

function Header() {
  return (
    <>
      <nav style={{marginBottom:20}}>
        <Space size={20}>
          <NavLink
            to='/app'
            className={({ isActive, isPending }) => {
              return classNames('nav', { active: isActive });
            }}
          >
            首页
          </NavLink>
          <NavLink
            to='/todo-list'
            className={({ isActive, isPending }) => {
              return classNames('nav', { active: isActive });
            }}
          >
            todo-list
          </NavLink>
          <NavLink
            to='/list'
            className={({ isActive }) => {
              return classNames('nav', { active: isActive });
            }}
          >
            list
          </NavLink>
          <NavLink
            to='/users'
            className={({ isActive }) => {
              return classNames('nav', { active: isActive });
            }}
          >
            users
          </NavLink>
        </Space>
      </nav>
    </>
  );
}
export default Header;
