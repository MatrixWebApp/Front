import React from 'react'

function Fraction({ num = 1, denom = 1 }) {

    let [numerator, setNumerator] = React.useState(num)
    let [denominator, setDenominator] = React.useState(denom)

    function handleNumeratorChange(event) {
        setNumerator(event.target.value);
    }
    function handleDenominatorChange(event) {
        setDenominator(event.target.value);
    }

    function displayDenominator(){
        if (Math.abs(denominator) !== 1){
            return  (<div class="denominator">
                        <input type="text" value={denominator} onChange={handleDenominatorChange} />
                    </div>)
        }
    }

    // TODO
    // remove denominator when it equal to +-1
    return (
        <div class="fraction">
            <div class="numerator">
                <input type="text" value={numerator} onChange={handleNumeratorChange} />
            </div>
            {displayDenominator()}
        </div>
    )

}

export default Fraction