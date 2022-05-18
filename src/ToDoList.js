const ToDoList = ({todos}) => {

    console.log(`This is: `, todos);

    return (

        <div id="todos">

            {todos.map(todo => (

                <div key={todo.id}>

                    <p>{todo.content}</p>

                </div>

            ))}

        </div>

    );

};
 
export default ToDoList;
