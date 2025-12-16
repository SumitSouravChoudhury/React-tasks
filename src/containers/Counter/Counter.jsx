import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  increaseByAmout,
} from "../../redux/slice/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2">
      <h2>Count: {count}</h2>

      <div className="flex gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={() => dispatch(increaseByAmout(10))}
        >
          +10
        </button>
      </div>
    </div>
  );
};

export default Counter;
