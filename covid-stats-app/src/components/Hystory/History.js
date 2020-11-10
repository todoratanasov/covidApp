import React from 'react';


const history = (props)=>{

    return(
        <table>
            <thead>
                <tr>
                    <th colSpan="2">
                        {props.curDate.slice(0,10)}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Active Cases</td>
                    <td>{props.activeCases}</td>
                </tr>
                <tr>
                    <td>New Cases</td>
                    <td>{props.confirmed}</td>
                </tr>
                <tr>
                    <td>Recovered</td>
                    <td>{props.recovered}</td>
                </tr>
                <tr>
                    <td>Death Cases</td>
                    <td>{props.death}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default history;