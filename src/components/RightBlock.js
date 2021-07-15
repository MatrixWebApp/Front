import React, {Component} from 'react'

class RightBlock extends Component {
    render(){
        return (
            <div id="rightBlock">
                <div id="input">
                    <form name="expressionField">
                        <input></input>
                    </form>
                    <div id="calculateButton">
                        <button>=</button>
                    </div> 
                </div>
                <div id="resultBlock">
                    <table>
                        <tr>
                            <th>
                                <div class="fraction">1/5</div>
                            </th>
                            <th>
                                <div class="fraction">42/5</div>
                            </th>
                            <th>
                                <div class="fraction">1/5</div>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <div class="fraction">1/5</div>
                            </th>
                            <th>
                                <div class="fraction">42/5</div>
                            </th>
                            <th>
                                <div class="fraction">1/5</div>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <div class="fraction">1/5</div>
                            </th>
                            <th>
                                <div class="fraction">42/5</div>
                            </th>
                            <th>
                                <div class="fraction">1/5</div>
                            </th>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }

}

export default RightBlock