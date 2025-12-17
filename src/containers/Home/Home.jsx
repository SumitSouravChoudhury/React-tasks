import { Link } from "react-router-dom";
import Modal from "/src/components/Modal";

const Home = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-start gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={onClose}
        >
          <Link to="/todo">Todo List</Link>
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={onClose}
        >
          <Link to="/form">Form</Link>
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={onClose}
        >
          <Link to="/search">Search filter</Link>
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={onClose}
        >
          <Link to="/counter">Counter</Link>
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={onClose}
        >
          <Link to="/circle">Circle Task</Link>
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={onClose}
        >
          <Link to="/emoji">Emoji Task</Link>
        </button>
      </div>
    </Modal>
  );
};

export default Home;
