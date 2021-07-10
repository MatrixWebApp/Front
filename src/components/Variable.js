import React, {Component} from 'react'

class Variable extends Component {
    render(){
        return (
            <div class="variable">
                <div class="nameBlock">
                    <span class="name">X</span>
                    <sub class="size">
                        <span class="height">3</span>|<span class="width">3</span>
                    </sub>
                </div>
                <div class="equalSign">=</div>
                <div class="matrixBlock">
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
                <div class="augmentedZone">
                    <div class="augmentedButton">
                        <button>x</button>
                    </div>
                </div>
                <div>
                    <button class="deleteVariableButton">x</button>
                </div>
            </div>
        )
    }
}
export default Variable