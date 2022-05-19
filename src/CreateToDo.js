import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "./Firebase";

const CreateToDo = () => {

    const [todo, setToDo] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleAdd = e => {

        e.preventDefault();

        setIsLoading(true);

        const colRef = collection(db, "todos");

        addDoc(colRef, {

           content: todo,
           createdAt: serverTimestamp()

        }).then(() => {

            console.log(`To-Do Added`);
            setIsLoading(false);

        }).catch(err => {

            console.log(err.message);

        });

    };

    return (

        <div id="create-list">

            <form onSubmit={handleAdd}>

                <label htmlFor="create-to-do">Add New To-Do: </label><br/><br/>
                <input type="text" id="create-to-do" placeholder="type something...." value={todo} onChange={e => setToDo(e.target.value)}></input>

                {!isLoading ? <button>Add</button> : <button disabled>Adding</button>}

            </form>

        </div>

    );

};
 
export default CreateToDo;