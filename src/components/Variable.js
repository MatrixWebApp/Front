import React, { useContext } from 'react'
import Context from '../context'
import Fraction from './Fraction'



function Variable(props) {

    const { deleteVariable } = useContext(Context)
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
        setValues(values => {
            
            if (newWidth > oldWidth){
                let newColumns = []
                for (let i = 0; i < newWidth-oldWidth; i++){
                    newColumns.push(<Fraction />)
                }
                return values.map(row => row.concat(newColumns))
            }
            else{
                return values.map(row => row.slice(0, newWidth))
            }
        })
        setWidth(newWidth);
    }

    function handleHeightChange(event) {
        let oldHeight = height
        let newHeight = event.target.value
        if (newHeight === "") return;
        console.log(oldHeight, newHeight)
        setValues(values => {
            
            if (newHeight > oldHeight){
                let newRows = [[]]
                for (let i = 0; i < width; i++){
                    newRows[0].push(<Fraction />)
                }
                for (let i = 0; i < newHeight - oldHeight-1; i++){
                    newRows.push(newRows[0])
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
                <span class="name">X</span>
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