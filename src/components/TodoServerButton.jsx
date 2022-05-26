import React from 'react';
import PostService from "../API/PostService";

const TodoServerButton = ({getTodosFromServer, setIsPostsLoading}) => {
    const fetchTodos = () => {
            setIsPostsLoading(true);
            setTimeout(async () => {
                const todos = await PostService.getAll();
                const newTodos = [];
                todos.map(element => newTodos.push({id: element.id, text: element.title}));
                setIsPostsLoading(false);
                return getTodosFromServer(newTodos);
            }, 1000)
    }

    return (
        <button className="todo-button todo-button__server" onClick={fetchTodos}>
            Get Todos from Server
        </button>
    );
};

export default TodoServerButton;