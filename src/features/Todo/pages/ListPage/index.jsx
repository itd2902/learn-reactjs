import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import Loading from '../../../../components/Loading';
import TodoForm from '../../components/TodoForm';
ListPage.propTypes = {};

function ListPage(props) {
   const initToDoList = [
      {
         id: 1,
         name: 'Item 1',
         status: 'new',
      },
      {
         id: 2,
         name: 'Item 2',
         status: 'completed',
      },
      {
         id: 3,
         name: 'Item 3',
         status: 'new',
      },
   ];
   const [todoList, settodoList] = useState(initToDoList);
   const [count, setCount] = useState(0);
   const location = useLocation();
   const history = useHistory();
   const match = useRouteMatch();
   const [filteredStatus, setFilteredStatus] = useState(() => {
      const param = queryString.parse(location.search);
      return param.status || 'all';
   });

   useEffect(() => {
      const queryParams = queryString.parse(location.search);
      setFilteredStatus(queryParams.status);
   }, [location.search]);
   const handleTodoClick = useMemo(
      (todo, idx) => {
         // clone current array to the new one
         // must clone object then can change
         if (idx) {
            const newTodoList = [...todoList];

            //toggle state
            const newTodo = {
               ...newTodoList[idx],
               status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
            };
            newTodoList[idx] = newTodo;

            //update todolist
            settodoList(newTodoList);
         }
      },
      [todoList]
   );
   const updateQueryPramsToUrl = (params) => {
      const queryStringParams = { status: params };
      history.push({
         pathname: match.path,
         search: queryString.stringify(queryStringParams),
      });
   };
   const showAll = () => {
      // setFilteredStatus('all');
      //update param 'all' to route
      updateQueryPramsToUrl('all');
   };
   const showCompleted = () => {
      // setFilteredStatus('completed');
      updateQueryPramsToUrl('completed');
   };
   const showNew = () => {
      // setFilteredStatus('new');
      updateQueryPramsToUrl('new');
   };
   // const renderListToDo = todoList.filter(x => {
   //     return filteredStatus === 'all'
   //         || x.status == filteredStatus;
   // });
   const renderListToDo = useMemo(() => {
      return todoList.filter((x) => {
         console.log('load');
         return filteredStatus === 'all' || x.status == filteredStatus;
      });
   }, [todoList, filteredStatus]);
   const click = () => {
      setCount(count + 1);
   };

   const fetchData = useCallback((type) => {
      return fetch(`https://jsonplaceholder.typicode.com/${type}`)
         .then((response) => response.json())
         .then((json) => console.log(json));
   }, []);
   useEffect(() => {
      fetchData('todos');
   }, []);

   return (
      <div>
         <TodoForm />
         <p>Todo List</p>
         <TodoList toDoList={renderListToDo} onTodoClick={handleTodoClick} fetchData={fetchData} />
         <div>
            <button onClick={click}>Click : {count}</button>
            <button onClick={showAll}>Show all</button>
            <button onClick={showCompleted}>Show completed</button>
            <button onClick={showNew}>Show new</button>
         </div>
      </div>
   );
}

export default ListPage;
