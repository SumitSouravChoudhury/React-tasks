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

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    setFormatData(
      users.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        className="border rounded p-2 w-100"
        name="searchQuery"
        placeholder="search name..."
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
