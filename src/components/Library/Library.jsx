import "./Library.scss";
const IMG_API = "http://image.tmdb.org/t/p/w1280";
const Library = ({
  title,
  poster_path,
  release_date,
  overview,
  vote_average,
  searchTerm,
}) => {
  return (
    <div>
      <img src={IMG_API + poster_path} alt={title} />
      <div className="meta">
        <h5>{title}</h5>
        <p>{release_date.slice(0, 4)}</p>
      </div>
    </div>
  );
};

export default Library;
