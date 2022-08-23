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

        <div>
          Page {basePage} of {pageNumber}
          <button
            disabled={pageNumber === 1}
            onClick={() => {
              setPageNumber((currPage) => currPage - 1);
            }}
          >
            &lt;
          </button>{" "}
          <button
            onClick={() => {
              setPageNumber((currPage) => currPage + 1);
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
