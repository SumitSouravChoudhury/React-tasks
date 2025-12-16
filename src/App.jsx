import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import TodoList from "./containers/TodoList/TodoList";
import Form from "./containers/Form/Form";
import TodoListNew from "./containers/TodoList/TodoListNew";
import FormNew from "./containers/Form/FormNew";
import SearchFilter from "./containers/SearchFilter/SearchFilter";
import SearchFilterNew from "./containers/SearchFilter/SearchFilterNew";
import Counter from "./containers/Counter/Counter";
import CircleTask from "./containers/CircleTask/CircleTask";
import EmojiTask from "./containers/EmojiTask/EmojiTask";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/todo-new" element={<TodoListNew />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form-new" element={<FormNew />} />
        <Route path="/search" element={<SearchFilter />} />
        <Route path="/search-new" element={<SearchFilterNew />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/circle" element={<CircleTask />} />
        <Route path="/emoji" element={<EmojiTask />} />
      </Routes>
    </Router>
  );
}

export default App;
