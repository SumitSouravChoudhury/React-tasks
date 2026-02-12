import { useDispatch, useSelector } from "react-redux";
import { addText } from "../../redux/slice/textSlice";

const Text = () => {
  const character = useSelector((state) => state.text.value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(addText(e.target.value));
  };

  return (
    <div>
      <input
        className="border rounded p-2 w-100"
        type="text"
        name="text"
        onChange={handleChange}
      />
      <p>Character Length: {character.length}</p>
    </div>
  );
};

export default Text;
