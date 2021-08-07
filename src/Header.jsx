import './Header.css';

function Header() {
    return (
        <div className="header">
        <a href="#default" className="logo">KEYWORDS</a>
          <div className="header-right">

            <div className="search-bar">
              <form action="/#">
                <input type="text" name="search" />
                <button type="submit">SUBMIT <span className="buffer"></span>🡲</button>
              </form>
            </div>

            <div>A</div>
          </div>
        </div>
    );
}

export default Header;