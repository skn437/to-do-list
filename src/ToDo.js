import CreateToDo from "./CreateToDo.js";
import { useFetch }  from "./CustomHooks.js";
import ToDoList from "./ToDoList.js";

const ToDos = () => {

    const {todos, isLoading} = useFetch();

    return (

        <div id="todo-list">

            <h1>To Do List:</h1>

            {isLoading && (<div>Loading...</div>)}

            <ToDoList todos={todos}></ToDoList>
            <CreateToDo></CreateToDo>

        </div>

    );

};
 
export default ToDos;

