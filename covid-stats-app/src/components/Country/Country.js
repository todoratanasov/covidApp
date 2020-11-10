import React from 'react';
import {NavLink} from 'react-router-dom';
const country = (props)=>{
    return(
        <NavLink to={{pathname:`/detailed/${props.slug}`}}>
            <li onClick={props.countrySelect}>
                {`${props.title} Total confirmed: ${props.totalConfirmed}`}
            </li>
        </NavLink>
            
    )
}

export default country;