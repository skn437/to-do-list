import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "./Firebase";

const CreateToDo = () => {

    const [todo, setToDo] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (

        <div id="create-list">

            <form id="create-form" onSubmit={e => {

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

            }}>

                <label htmlFor="create-to-do">Add New To-Do: </label><br/><br/>
                <input type="text" id="create-to-do" placeholder="type something...." value={todo} onChange={e => setToDo(e.target.value)}></input>
                <br/><br/>

                {!isLoading ? <button className="add-button">Add</button> : <button className="add-button" disabled>Adding</button>}

            </form>

        </div>

    );

};
 
export default CreateToDo;