import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./Firebase";

const ToDoList = ({todos}) => {

    return (

        <div id="todos">

            {todos.length ? todos.map(todo => (

                    <div key={todo.id} className="list" onClick={() => {

                        const docRef = doc(db, "todos", todo.id);

                        deleteDoc(docRef).then(() => {
                
                            console.log(`Item deleted of `, todo.id);
                    
                        }).catch(err => {
                    
                            console.log(err.message);
                    
                        });

                    }}>

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
