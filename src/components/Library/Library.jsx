import { useEffect, useState } from "react";
import "./Library.scss"
const Library = () => {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        const fetchPost = async() => {
            const res = await fetch('https://www.omdbapi.com/?apikey=d331fa0e&t=bullet+train');
            const resulToJSON =await res.json();
            setMovies(resulToJSON);
        }
        fetchPost();
    }, [])
    return ( 
        <>
         <section>
                {Object.keys(movies).map((key, index)=>{
                    return(
                        <div key={index}>
                          {/* {key}: {JSON.stringify(movies[key])} */}
                          {key === "Poster"? <img src={movies[key]} alt="hello"/> : ""}
                          {key === "Title"? <h1>{movies[key]}</h1>: ""}
                        </div>
                    )
                })}
                
         </section>
        </>
     );
}
 
export default Library;