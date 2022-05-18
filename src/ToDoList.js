const ToDoList = ({todos}) => {

    return (

        <div id="todos">

            {todos.map(todo => (

                <div id="todo-preview" key={todo.id}>

                    <p>{todo.content}</p>

                </div>

            ))}

        </div>

    );

};
 
export default ToDoList;
