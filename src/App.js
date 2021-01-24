import { Link, NavLink, Route, Switch } from 'react-router-dom';
import TodoFeature from './features/Todo';
import TodoList from './features/Todo/components/TodoList';
import Loading from './components/Loading/index';
function App() {
  return (
    <div className="App">
      Header
      {/* <Link to="/todo">Todo</Link> */}
      {/* Navlink có thêm class active */}
      <NavLink to="/todo" activeClassName="active-menu">Todo</NavLink>
      <NavLink to="/loading" >Loading</NavLink>
      {/* Chỉ match với thằng đàu tiên có path được match */}
      <Switch>
        {/* 
          - Mặc định exact = false map với startWith ví dụ /todos match với /todos/123
          - Nếu để exact thì URL sẽ map chuẩn với path thì route đến trang web mới đúng
          - dùng exact = true cho routing con
       */}
        <Route path="/" component={Loading} exact />
        <Route path="/loading" component={Loading} />
        <Route path="/todo" component={TodoList} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
