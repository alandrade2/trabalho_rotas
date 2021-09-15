import React from 'react';
import './Pages.css';

function Titulo(props) {

return (
    <React.Fragment>
        <h3>{props.texto}</h3>
    </React.Fragment>
)
}

export default Titulo;
