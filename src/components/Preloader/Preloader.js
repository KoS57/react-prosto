import React from 'react';
import{indicator} from '../../images/indicator.gif'

let Preloader = (props) => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={indicator} />
    </div>
}

export default Preloader;