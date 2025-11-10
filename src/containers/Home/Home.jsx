import "./home.scss";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <button>
        <Link to="/todo">Todo List</Link>
      </button>
    </div>
  );
};

export default Home;
