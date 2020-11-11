import React from 'react';
import {NavLink} from 'react-router-dom';
const country = (props)=>{
    return(
        <NavLink to={{pathname:`/detailed/${props.slug}`}}>
            <li className='country' onClick={props.countrySelect}>
            <span className='country-title'>{`${props.title}`}</span>
            <span className='country-confirmed'>Total confirmed: {`${props.totalConfirmed}`}</span>
            </li>
        </NavLink>
            
    )
}

export default country;