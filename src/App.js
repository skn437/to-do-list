import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ToDos from "./ToDos";

const App = () => {

    return (

        <Router>

            <div className="App">

                <Routes>

                    <Route path="/" element={<ToDos></ToDos>}></Route>

                </Routes>

            </div>

        </Router>

    );

};
 
export default App;