import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ToDo from "./ToDo.js";

const App = () => {

    return (

        <Router>

            <div className="App">

                <Routes>

                    <Route path="/" element={<ToDo></ToDo>}></Route>

                </Routes>

            </div>

        </Router>

    );

};
 
export default App;