import useFetch  from "./useFetch";
import ToDoList from "./ToDoList";

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

