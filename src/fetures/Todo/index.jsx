import React, { useState } from 'react';
import TodoList from './components/TodoList';
TodoFeture.propTypes = {

};

function TodoFeture(props) {
    const initToDoList = [
        {
            id: 1,
            name: 'Item 1',
            status: 'new'
        },
        {
            id: 2,
            name: 'Item 2',
            status: 'completed'
        },
        {
            id: 3,
            name: 'Item 3',
            status: 'new'
        }
    ]
    const [todoList, settodoList] = useState(initToDoList)
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        // clone current array to the new one
        // must clone object then can change
        const newTodoList = [...todoList];

        //toggle state
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        }
        newTodoList[idx] = newTodo;

        //update todolist
        settodoList(newTodoList);
    }
    const showAll = () => {
        setFilteredStatus('all');
    }
    const showCompleted = () => {
        setFilteredStatus('completed');
    }
    const showNew = () => {
        setFilteredStatus('new');
    }
    const renderListToDo = todoList.filter(x => filteredStatus === 'all'
        || x.status == filteredStatus)
    return (
        <div>
            <p>Todo List</p>
            <TodoList toDoList={renderListToDo} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={showAll}>Show all</button>
                <button onClick={showCompleted}>Show completed</button>
                <button onClick={showNew}>Show new</button>
            </div>
        </div>
    );
}

export default TodoFeture;