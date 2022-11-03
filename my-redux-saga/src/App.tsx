// import { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import TodoList from './pages/todo-list';
import List from './pages/list';
import Users from './pages/users';
import CanvasLayout from './pages/konva';

import { store } from './redux/store';

import './App.css';

// @ts-ignore
// export const StoreContext = createContext<Store>();

function App() {
  return (
    <>
      {/* <StoreContext.Provider value={store}> */}
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/app' element={<App />} />
            <Route path='/todo-list' element={<TodoList />} />
            <Route path='/list' element={<List />} />
            <Route path='/users' element={<Users />} />
            <Route path='/canvas' element={<CanvasLayout />} />
            <Route path='*' element={<>404</>} />
          </Routes>
        </BrowserRouter>
      </Provider>
      {/* </StoreContext.Provider> */}
    </>
  );
}

export default App;
