import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Library from "./components/Library/Library";
function App() {
  const [movies, setMovies] = useState([]);
  const [length, setLength] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d8c2552f21a3c339b4bc8cd51606624c&page=${pageNumber}`
      );
      const data = await res.json();
      setPageNumber(data.page);
      const { results } = data;
      setLength(results.length);
      setMovies(results);
    };
    fetchPost();
  }, [pageNumber]);
  //search
  useEffect(() => {
    const post = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=d8c2552f21a3c339b4bc8cd51606624c&query=" +
          searchTerm
      );
      const data = await res.json();
      setPageNumber(data.page);
      const { results } = data;
      setLength(results.length);
      setMovies(results);
    };
    post();
  }, [searchTerm]);
  return (
    <div className="App">
      <Header
        result={length}
        pageNumber={pageNumber}
        setSearchTerm={setSearchTerm}
        setPageNumber={setPageNumber}
      />
      <div className="movie">
        {movies.length > 0 &&
          movies.map((data) => {
            return <Library key={data.id} {...data} searchTerm={searchTerm} />;
          })}
      </div>
    </div>
  );
}

export default App;
