import react from "react";

function TableCard(props) {
    console.log("test2");
    return (
        
            
			<tr className="row">
                <td className="column" data-column="column1">{props.keyword}</td>
                <td className="column" data-column="column2"><i class="material-icons">search</i></td>
                <td className="column" data-column="column3">{props.goal}</td>
                <td className="column" data-column="column4">{props.matches}</td>
                <td className="column" data-column="column5">{props.searchStat}</td>
                <td className="column" data-column="column6"><i class="material-icons">delete</i></td>
                                
            </tr>
		
    );
}

export default TableCard;