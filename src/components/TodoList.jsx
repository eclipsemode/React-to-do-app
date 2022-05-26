import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoServerButton from "./TodoServerButton";
import Loader from "./UI/Loader/Loader";
import useFetch from "./hooks/useFetch";
import PostService from "../API/PostService";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [fetch, isPostsLoading] = useFetch(async () => {
        const todos = await PostService.getAll();
        const newTodos = [];
        todos.map(element => newTodos.push({id: element.id, text: element.title}));
        setTodos(todos.concat(newTodos));
    })

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [...todos, todo];

        setTodos(newTodos);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    };

    const removeTodo = id => {
        const removeArr = [...todos.filter(todo => todo.id !== id)];

        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const getTodosFromServer = (newTodos) => {
        setTodos(todos.concat(newTodos));
    }

    return (
        <div>
            <TodoServerButton getTodosFromServer={getTodosFromServer} fetch={fetch} />
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            {isPostsLoading
            ? <Loader />
            : <Todo updateTodo={updateTodo} todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
            }
        </div>
    );
};

export default TodoList;