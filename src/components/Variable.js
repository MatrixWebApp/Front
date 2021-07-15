import React, { useContext } from 'react'
import Context from '../context'

function Variable(props) {

    const { deleteVariable } = useContext(Context)
    let [isAugmented, setIsAugmented] = React.useState(false)


    function expandMatrix() {
        setIsAugmented(true)
    }

    function reduceAugmentedMatrix() {
        setIsAugmented(false)
        console.log("reduced")
    }


    return (

        <div class="variable" id={props.id} >
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
                {
                    isAugmented ? <>
                        <div class="augmentedMatrixBlock">
                            <table>

                                <tr>
                                    <th>
                                        <div class="fraction">1/5</div>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <div class="fraction">1/5</div>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <div class="fraction">1/5</div>
                                    </th>
                                </tr>
                            </table>
                        </div>
                        <div class="reduceMatrixButtonContainer">
                            <button class="reduceMatrixButton" onClick={reduceAugmentedMatrix}>x</button>
                        </div>
                    </>
                        :
                        <div class="augmentedButtonContainer">
                            <button class="augmentedButton" onClick={expandMatrix}>x</button>
                        </div>
                }
            </div>
            <div>
                <button class="deleteVariableButton" onClick={() => deleteVariable(props.id)}>x</button>
            </div>
        </div>
    )

}
export default Variable