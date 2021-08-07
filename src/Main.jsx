import Table from "./Table";
import './Main.css';

function Main() {
    return (
        <div className="main">
            <div className="container">
                <h2>Add Another keyword <span> 1/3 </span>  UPGRADE</h2>
                <form action="/#" className="filter-bar">
                  <input type="text" placeholder="Enter your filters here" name="search" />
                  <button type="submit">SAVE FILTERS</button>
                </form>
            </div>

            <div className="container">
                <h2>The terms you are tracking</h2>
                <Table />
            </div>
        </div>
    );
}

export default Main;