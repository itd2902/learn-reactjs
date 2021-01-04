import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';
TodoList.propTypes = {
    toDoList: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    toDoList: [],
    onTodoClick: null
}

function TodoList({ toDoList, onTodoClick }) {
    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;

        onTodoClick(todo, idx);
    }
    return (
        <ul className="todo-list">
            {toDoList.map((todo, index) =>
                <li
                    key={todo.id}
                    className={classNames({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}
                    onClick={() => handleTodoClick(todo, index)}
                > {todo.name}</li>
            )
            }
        </ul>
    );
}

export default TodoList;