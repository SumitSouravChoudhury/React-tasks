import { useState } from "react";

const CircleTask = () => {
  const [circles, setCircles] = useState([]);

  const handleAdd = () => {
    setCircles((prev) => [
      ...prev,
      { id: Date.now(), flag: true, bgColor: "red" },
    ]);
  };

  const handleClearAll = () => {
    setCircles([]);
  };

  const handleCircleClick = (id) => {
    setCircles((prev) =>
      prev.map((circle) => {
        const newFlag = !circle.flag;
        return circle.id === id
          ? {
              ...circle,
              flag: newFlag,
              bgColor: newFlag ? "red" : "green",
            }
          : circle;
      })
    );
  };

  const circleCount = circles.filter(
    (circle) => circle.bgColor === "red"
  ).length;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8 items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={handleAdd}
        >
          Add Circle
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={handleClearAll}
        >
          Clear All
        </button>
        <h3>Circle Count: {circleCount}</h3>
      </div>

      <div className="flex flex-col gap-5">
        {circles.map((circle) => {
          return (
            <div key={circle.id}>
              <span>{circle.id}</span>
              <div
                onClick={() => handleCircleClick(circle.id)}
                className={`w-[100px] h-[100px] border rounded-full cursor-pointer ${
                  circle.bgColor === "red" ? "bg-red-500" : "bg-green-500"
                }`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircleTask;
