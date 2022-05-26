import React from 'react';

const TodoServerButton = ({fetch}) => {

    return (
        <button className="todo-button todo-button__server" onClick={() => fetch()}>
            Get Todos from Server
        </button>
    );
};

export default TodoServerButton;