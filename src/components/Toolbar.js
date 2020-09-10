import React from 'react';
import PropTypes from 'prop-types';
import {ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props;
    let btnsArray = [];
    filters.forEach(element => {
        btnsArray.push(<ToggleButton key={element} value={element} variant="outline-secondary">{element}</ToggleButton>);
    });

    const handleChange = e => {
        onSelectFilter(e);
    }

    return (
        <ToggleButtonGroup type="radio"  name="options" defaultValue={selected} onChange={e => handleChange(e)}> 
            {btnsArray}
        </ToggleButtonGroup>
    )
}
Toolbar.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired
}
export default Toolbar;