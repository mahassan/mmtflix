export function getAllMovies(ALLMOVIES_API, setPageNumber,setLength, setMovies){
    const fetchPost = async() => {
        const res = await fetch(ALLMOVIES_API);
        const data =await res.json();
        setPageNumber(data.page)
        const {results} = data;
        setLength(results.length)
        setMovies(results);
    }
    fetchPost();
}