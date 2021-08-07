import './Table.css';
import Data from "./data";
import TableCard from "./TableCard";

function createRow(rowDetails) {
    return (
        <TableCard 
            keyword = {rowDetails.keyword}
            goal = {rowDetails.goal}
            matches = {rowDetails.matches}
            searchStat = {rowDetails.search_status}
        />
    );
}

function Table() {
    return (
        <div>
            <table data-vertable="ver1">
                        <thead>
                            <tr className="row head">
                                <th className="column">Keywords</th>
                                <th className="column"></th>
                                <th className="column">Goal</th>
                                <th className="column">Mathes</th>
                                <th className="column">Search Status</th>
                                <th className="column">Delete Keyword</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {Data.map(createRow)}                            
                        </tbody>

            </table>
            <button>View Result</button>
       </div>
    );
}

export default Table;