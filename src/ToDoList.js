import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./Firebase";

const ToDoList = ({todos}) => {

    const handleDelete = id => {

        const docRef = doc(db, "todos", id);

        deleteDoc(docRef).then(() => {

            console.log(`Item deleted of `, id);
    
        }).catch(err => {
    
            console.log(err.message);
    
        });

    };

    return (

        <div id="todos">

            {todos.length ? todos.map(todo => (

                    <div key={todo.id} className="list" onClick={() => handleDelete(todo.id)}>

                        <p>{todo.content}</p>

                    </div>

                )) : 

                <div className="list">

                    <p>You have no to-do-list. Yay.</p>

                </div>
            
            }

        </div>

    );

};
 
export default ToDoList;
