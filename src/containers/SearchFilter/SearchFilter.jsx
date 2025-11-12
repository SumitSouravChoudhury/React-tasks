import { useEffect, useState } from "react";

const SearchFilter = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          console.log("Error fetching the response");
        }

        const userData = await response.json();
        setUsers(userData);
        setFilterData(userData);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      const filteredItems = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilterData(filteredItems);
    }, 500);

    return () => clearTimeout(delay);
  }, [searchTerm, users]);

  return (
    <div className="flex flex-col gap-4">
      <input
        className="border rounded p-2 w-100"
        type="text"
        placeholder="search name..."
        name="search"
        value={searchTerm}
        onChange={handleChange}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        filterData.map((user) => {
          return (
            <div key={user.id}>
              <span>{user.id}</span>
              <p>Name:</p>
              <span>{user.name}</span>
              <p>Username:</p>
              <span>{user.username}</span>
              <p>Email:</p>
              <span>{user.email}</span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SearchFilter;
