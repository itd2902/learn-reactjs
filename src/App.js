import { useEffect } from 'react';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import TodoFeature from './features/Todo';
import TodoList from './features/Todo/components/TodoList';
import Loading from './components/Loading/index';
import Home from './features/Todo/pages/Home/Home';
import NotFound from './components/NotFound';
import productApi from './api/productApi';
function App() {
   // hook in react-route-dom
   // eslint-disable-next-line no-undef
   useEffect(() => {
      const fetchProduct = async () => {
         const params = {
            _limit: 10,
         };
         const productList = await productApi.getAll(params);
         console.log(productList);
      };
      fetchProduct();
   }, []);
   return (
      <div className="App">
         Header
         {/* <Link to="/todo">Todo</Link> */}
         {/* Navlink có thêm class active */}
         <p>
            <NavLink to="/todo-list" activeClassName="active-menu">
               Todo
            </NavLink>
         </p>
         <p>
            <NavLink to="/loading">Loading</NavLink>
         </p>
         {/* Chỉ match với thằng đàu tiên có path được match */}
         {/* <Redirect from="/home" to="/todo"></Redirect> */}
         <p>Đây là trang</p>
         <Switch>
            {/* 
          - Mặc định exact = false map với startWith ví dụ /todos match với /todos/123
          - Nếu để exact thì URL sẽ map chuẩn với path thì route đến trang web mới đúng
          - dùng exact = true cho routing con
       */}

            <Route path="/" component={Home} exact />
            <Route path="/todo-list" component={TodoFeature} />
            <Route path="/loading" component={Loading} />
            <Route component={NotFound} />
         </Switch>
         Footer
      </div>
   );
}

export default App;
