import { render } from "@testing-library/react";
import Variable from '../components/Variable'
import PropTypes from 'prop-types'

function addNewVariable({addNewVariableFunc}){
        addNewVariable(
            <tr> 
                <th>
                    <Variable />
                </th>
            </tr>
        )
}

export default addNewVariable;