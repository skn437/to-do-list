import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
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

    return {todos, isLoading};

};

const useDelete = id => {

    const docRef = doc(db, "todos", id);

    deleteDoc(docRef).then(() => {

        console.log(`Item deleted of `, id);

    }).catch(err => {

        console.log(err.message);

    });

};
 
export {useFetch, useDelete};