import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./Firebase.js";

const useFetch = () => {

    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const colRef = collection(db, "todos");

    useEffect(() => {

        onSnapshot(colRef, snapshot => {

            let todoProto = [];

            snapshot.docs.forEach(todo => {

                todoProto.push({...todo.data(), id: todo.id});

            });

            setTodos(todoProto);
            setIsLoading(false);

        });

    }, []);

    console.log(`Fetched Data: `, todos, isLoading);

    return {todos, isLoading};

};

const useDummy = () => {

    console.log(`Hell`);

};
 
export {useFetch, useDummy};