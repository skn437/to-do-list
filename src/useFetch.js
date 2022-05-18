import { collection, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { db } from "./Firebase.js";

const useFetch = () => {

    const [todos, setTodos] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const colRef = collection(db, "todos");

    onSnapshot(colRef, snapshot => {

        setIsLoading(true);

        let todoProto = [];

        snapshot.docs.forEach(todo => {

            todoProto.push({...todo.data(), id: todo.id});

        });

        setTodos(todoProto);
        setIsLoading(false);

    });

    return {todos, isLoading};

};
 
export default useFetch;