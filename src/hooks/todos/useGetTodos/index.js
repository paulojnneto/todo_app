import { useState, useEffect } from "react";
import { getTodoList } from "../../../service";

export const useGetTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodoList().then((response) => {
            setTodos(response)
        })
    }, [])

    return [todos, setTodos]
}