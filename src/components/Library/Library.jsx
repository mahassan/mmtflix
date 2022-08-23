import "./Library.scss"
const IMG_API = "http://image.tmdb.org/t/p/w1280"
const Library = ({title, poster_path, overview, vote_average, searchTerm}) => {
    return ( 
        <>
            <img src={IMG_API + poster_path} alt={title} />
        </>
     );
}
 
export default Library;