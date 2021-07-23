import React, { useContext } from 'react'
import Context from '../context'
import Fraction from './Fraction'
import generateArray from './utils'


function Variable(props) {

    const { deleteVariable } = useContext(Context)
    let name = React.useState(props.name)
    let [isAugmented, setIsAugmented] = React.useState(false)
    let [width, setWidth] = React.useState(2)
    let [height, setHeight] = React.useState(2)
    let [values, setValues] = React.useState([
            [<Fraction />, <Fraction />],
            [<Fraction />, <Fraction />]
    ])


    function expandMatrix() {
        setIsAugmented(true)
    }

    function reduceAugmentedMatrix() {
        setIsAugmented(false)
    }

    function handleWidthChange(event) {
    
        let oldWidth = width
        let newWidth = event.target.value
        if (newWidth === "") return;
        setValues(values => newWidth > oldWidth ?
                                values.map(row => row.concat(generateArray(<Fraction />, newWidth - oldWidth))):
                                    values.map(row => row.slice(0, newWidth))    
        )
        setWidth(newWidth);
    }

    function handleHeightChange(event) {
        let oldHeight = height
        let newHeight = event.target.value
        if (newHeight === "") return;
        console.log(oldHeight, newHeight)
        setValues(values => {
            if (newHeight > oldHeight){
                let newRows = []
                for (let i = 0; i < newHeight - oldHeight; i++){
                    newRows.push(generateArray(<Fraction />, width))
                }
                return values.concat(newRows)
            }
            else{
                return values.slice(0, newHeight)
            }
        })
        setHeight(newHeight);
    
    }

    return (

        <div class="variable" id={props.id} >
            <div class="nameBlock">
                <span class="name">{name}</span>
                <sub class="size">
                    <span class="height">
                        <input type="text" value={height} onChange={handleHeightChange}></input> 
                    </span>
                    |
                    <span class="width">
                        <input type="text" value={width} onChange={handleWidthChange}></input> 
                    </span>
                </sub>
            </div>
            <div class="equalSign">=</div>
            <div class="matrixBlock">
                <table>
                    {
                        values.map(row =>
                            <tr>
                                {row.map(elem => <th>{elem}</th>)}
                            </tr>
                        )
                    }
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
            <div class="deleteVariableButtonContainer">
                <button class="deleteVariableButton" onClick={() => deleteVariable(props.id)}>x</button>
            </div>
        </div>
    )

}
export default Variable