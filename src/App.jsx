import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import TodoList from "./containers/TodoList/TodoList";
import Form from "./containers/Form/Form";
import TodoListNew from "./containers/TodoList/TodoListNew";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/todo-new" element={<TodoListNew />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
