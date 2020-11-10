import React from 'react';

const country = (props)=>{

    return(
            <li onClick={props.countrySelect}>
                {`${props.title} New confirmed: ${props.newConfirmed} Total confirmed: ${props.totalConfirmed}`}
            </li>
    )
}

export default country;