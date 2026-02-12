import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";

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
import Text from "./containers/Text/Text";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={` ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      } p-5 min-h-[100vh]`}
    >
      <Router>
        <button
          className={`${
            theme === "light"
              ? "bg-gray-900 text-white"
              : "bg-blue-500 text-white"
          } font-bold cursor-pointer py-2 px-4 rounded absolute right-[120px]`}
          onClick={toggleTheme}
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded absolute right-[20px]"
          onClick={() => setIsOpen(true)}
        >
          Menu
        </button>
        <Home isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <Routes>
          <Route path="/todo" element={<TodoList />} />
          <Route path="/todo-new" element={<TodoListNew />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form-new" element={<FormNew />} />
          <Route path="/search" element={<SearchFilter />} />
          <Route path="/search-new" element={<SearchFilterNew />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/circle" element={<CircleTask />} />
          <Route path="/emoji" element={<EmojiTask />} />
          <Route path="/text" element={<Text />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
