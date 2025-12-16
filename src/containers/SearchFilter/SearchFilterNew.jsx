import { useEffect, useState } from "react";

const SearchFilterNew = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [formatData, setFormatData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("failed to fetch the response");
        }

        const data = await response.json();
        setUsers(data);
        setFormatData(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      const filterItems = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );

      setFormatData(filterItems);
    }, 500);

    return () => clearTimeout(delay);
  }, [search, users]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="border rounded p-2 w-100"
        placeholder="search name..."
        name="searchQuery"
        value={search}
        onChange={handleChange}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        formatData.map((user) => {
          return (
            <div key={user.id}>
              <span>{user.id}</span>
              <p>Name:</p>
              <span>{user.name}</span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SearchFilterNew;
