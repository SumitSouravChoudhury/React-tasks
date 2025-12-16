import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded">
        <Link to="/todo">Todo List</Link>
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded">
        <Link to="/form">Form</Link>
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded">
        <Link to="/search">Search filter</Link>
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded">
        <Link to="/counter">Counter</Link>
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded">
        <Link to="/circle">Circle Task</Link>
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded">
        <Link to="/emoji">Emoji Task</Link>
      </button>
    </div>
  );
};

export default Home;
