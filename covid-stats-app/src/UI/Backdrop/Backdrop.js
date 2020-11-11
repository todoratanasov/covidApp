import React from 'react';

const backdrop =(props)=>{

    return(
        <div className='Backdrop' onClick={props.onTogle}></div>
    )
      
}

export default backdrop;