import React from 'react';
import PropTypes from 'prop-types';

function ProjectList(props) {
    const {projects} = props;
    let pics1column = [];
    let pics2column = [];
    let pics3column = [];
    let columnsCounter = 1;
    projects.forEach(element => {
        if (columnsCounter === 1) {
            pics1column.push(<img key={element.img} alt="" className="cards" src={element.img}/>);
        } else if (columnsCounter === 2) {
            pics2column.push(<img key={element.img} alt="" className="cards" src={element.img}/>);
        } else {
            pics3column.push(<img key={element.img} alt="" className="cards" src={element.img}/>);
            columnsCounter = 0;
        }
        columnsCounter++;   
    });
    return(
        <div id="cardsDiv">
            <table>
                <tbody>
                    <tr>
                        <td id="1">{pics1column}</td>
                        <td id="2">{pics2column}</td>
                        <td id="3">{pics3column}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
ProjectList.propTypes = {
    projects: PropTypes.array
}
export default ProjectList;