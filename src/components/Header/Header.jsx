import Logo from "../Logo/Logo"
import "./Header.scss"
import Search from "../Search/Search";
const Header = ({result, pageCount, setSearchTerm}) => {
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
                    {result == null | undefined ? '' : result + " Results found"}
                </span>

                <p>
                    Page 1 of {pageCount} 
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="42" height="42" rx="1" stroke="white" stroke-width="2"/>
</svg>


                </p>
            </div>
        </>
     );
}
 
export default Header;