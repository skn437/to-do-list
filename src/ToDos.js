import useFetch  from "./useFetch.js";
import ToDoList from "./ToDoList.js";

const ToDos = () => {

    const {todos, isLoading} = useFetch();

    return (

        <div id="todo-list">

            <h2>To Do List</h2>

            {isLoading && (<div>Loading...</div>)}

            <ToDoList todos={todos}></ToDoList>

        </div>

    );

};
 
export default ToDos;

