import React from 'react'
function Variables(props){
    return (
        <div id="variables"> 
            <table>
                {
                    props.vars.map(variable => {
                        return (
                            <tr>
                                <th> 
                                    {variable}
                                </th>
                            </tr>
                        )
                    })
                }     
            </table>
            <div id="addVariableButtonContainer">
                <button id="addVariableButton" onClick={props.addNewVariable}>+</button> 
            </div>
        </div>
    )
    
}

export default Variables