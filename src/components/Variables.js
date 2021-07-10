import React, {Component} from 'react'
import Variable from './Variable'

class Variables extends Component {
    render(){
        return (
            <div id="variables"> 
                <table> 
                    <tr> 
                        <th>
                            <Variable />
                        </th>
                    </tr>
                    <tr> 
                        <th>
                            <Variable />
                        </th>
                    </tr>
                    <tr> 
                        <th>
                            <Variable />
                        </th>
                    </tr>
                    <tr> 
                        <th>
                            <Variable />
                        </th>
                    </tr>
                    <tr> 
                        <th>
                            <Variable />
                        </th>
                    </tr>
                </table>
                <div class="addVariableButtonContainer">
                    <button class="addVariableButton">+</button> 
                </div>
            </div>
        )
    }
}

export default Variables