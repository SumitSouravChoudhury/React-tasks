import { useEffect, useState } from "react";
import useFetch from "../../components/useFetch";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [isAsc, setIsAsc] = useState(true);

  const { data: users, loading: isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  useEffect(() => {
    const delay = setTimeout(() => {
      const filteredItems = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilterData(filteredItems);
    }, 500);

    return () => clearTimeout(delay);
  }, [searchTerm, users]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSort = () => {
    setFilterData(
      [...filterData].sort((a, b) =>
        isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
    setIsAsc(!isAsc);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <input
          className="border rounded p-2 w-100"
          type="text"
          placeholder="search name..."
          name="search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          className="bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 transition-all cursor-pointer"
          onClick={toggleSort}
        >
          {isAsc ? "Sort: Asc" : "Sort: Desc"}
        </button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        filterData.map((user) => {
          return (
            <div key={user.id}>
              <div>
                <p>{user.id}</p>
                <span className="font-bold">Name: </span>
                <span>{user.name}</span>
              </div>
              <div>
                <span className="font-bold">Username: </span>
                <span>{user.username}</span>
              </div>
              <div>
                <span className="font-bold">Email: </span>
                <span>{user.email}</span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SearchFilter;
