import { useEffect, useState } from "react";
import useFetch from "../../components/useFetch";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageValue, setPageValue] = useState(1);

  const ITEMS_PER_PAGE = 5;

  const { data: users, loading: isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );

  useEffect(() => {
    const delay = setTimeout(() => {
      const filteredItems = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilterData(filteredItems);
      setCurrentPage(1);
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
    setCurrentPage(1);
  };

  const highLighter = (text, highlight) => {
    if (!highlight) return text;

    const regex = new RegExp(`(${highlight})`, "gi");

    return text.split(regex).map((part, index) => {
      return part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={index} className="bg-yellow-300">
          {part}
        </mark>
      ) : (
        part
      );
    });
  };

  const handlePageChange = (e) => {
    const value = Number(e.target.value);

    if (value < 0) {
      setCurrentPage(1);
      setPageValue("");
      return;
    }

    if (value > 100) {
      setCurrentPage(100);
      setPageValue(100);
      return;
    }

    if (value === 0) {
      setCurrentPage(1);
      setPageValue("");
    } else {
      setPageValue(value);
      setCurrentPage(value);
    }
  };

  const handleNextClicked = () => {
    setCurrentPage((p) => p + 1);
    setPageValue(currentPage + 1);
  };

  const handlePrevClicked = () => {
    setCurrentPage((p) => p - 1);
    setPageValue(currentPage - 1);
  };

  const totalPages = Math.ceil(filterData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedData = filterData.slice(startIndex, endIndex);

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
        paginatedData.map((user) => {
          return (
            <div key={user.id}>
              <div>
                <p>{user.id}</p>
                <span className="font-bold">Name: </span>
                <span>{highLighter(user.name, searchTerm)}</span>
              </div>
              <div>
                <span className="font-bold">Email: </span>
                <span>{user.email}</span>
              </div>
              <div>
                <span className="font-bold">Body: </span>
                <span>{user.body}</span>
              </div>
            </div>
          );
        })
      )}
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <button
          disabled={currentPage === 1}
          onClick={handlePrevClicked}
          className="px-3 py-1 border rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>

        {/* {Array.from({ length: totalPages }).map((_, index) => (
          <span
            className="px-2 py-1 border rounded cursor-pointer"
            key={index}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </span>
        ))} */}
        <input
          className="border rounded py-1 px-2 outline-none w-[50px]"
          type="number"
          name="pageValue"
          value={pageValue}
          onChange={handlePageChange}
        />

        <button
          disabled={currentPage === totalPages}
          onClick={handleNextClicked}
          className="px-3 py-1 border rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
