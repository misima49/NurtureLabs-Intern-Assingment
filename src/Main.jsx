import Table from "./Table";
import './Main.css';

function Main() {
    return (
        <div className="main">
            <div className="container">
                <div className="sectionTitle">
                    <h2>Add Another keyword <span> 1/3 </span>  UPGRADE</h2>
                    <p>Advance Search</p>
                </div>
                <form action="/#" className="filter-bar">
                  <input type="text" placeholder="Enter your filters here" name="search" />
                  <button type="submit">SAVE FILTERS</button>
                </form>
            </div>

            <div className="container">
                <div className="sectionTitle">
                    <h2>The terms you are tracking</h2>
                    <p>The data will refresh every 5 min</p>
                </div>
                <Table />
            </div>
        </div>
    );
}

export default Main;