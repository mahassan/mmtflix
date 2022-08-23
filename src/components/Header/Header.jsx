import Logo from "../Logo/Logo";
import "./Header.scss";
import Search from "../Search/Search";
const Header = ({ result, pageNumber, setSearchTerm, setPageNumber }) => {
 const basePage = 1;
  return (
    <>
      <header>
        <div className="logo">
          <Logo />
        </div>
        <div className="search">
          <Search setSearchTerm={setSearchTerm} />
        </div>
      </header>
      <div className="pagination">
        <span>
          {(result == null) | undefined ? "" : result + " Results found"}
        </span>

        <p>
          Page {basePage} of {pageNumber} 
          <button disabled={pageNumber === 1}  onClick={() => {
              setPageNumber((currPage) => currPage -1);
            }}>back</button>{" "}
          <button
            onClick={() => {
              setPageNumber((currPage) => currPage + 1);
            }}
          >
            next
          </button>
        </p>
      </div>
    </>
  );
};

export default Header;
