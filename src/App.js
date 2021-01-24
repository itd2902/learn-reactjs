import { Link, Route } from 'react-router-dom';
import TodoFeature from './features/Todo';
import TodoList from './features/Todo/components/TodoList';

function App() {
  return (
    <div className="App">
      Header
      <Link to="/todo">Todo</Link>
      <Route path="/todo" component={TodoFeature} />
      <Route path="/todo" component={TodoList} />
      Footer
    </div>
  );
}

export default App;
