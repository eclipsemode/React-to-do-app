import React from 'react';
import axios from "axios";

const TodoServerButton = ({getTodosFromServer}) => {
    async function fetchTodos() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const newTodos = [];
        response.data.map(element => newTodos.push({id: element.id, text: element.title}));
        return getTodosFromServer(newTodos);
    }

    return (
        <button className="todo-button todo-button__server" onClick={fetchTodos}>
            Get Todos from Server
        </button>
    );
};

export default TodoServerButton;