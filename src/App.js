import Variables from './components/Variables'
import RightBlock from './components/RightBlock'
import Variable from './components/Variable'
import './styles.css'
import Context from './context'
import React from 'react'
function App() {

  const [vars, setVars] = React.useState([])



  function addNewVariable() {
    setVars(
      (() => vars.concat([<Variable deleteVariable={deleteVariable} id={Date.now()} key={Date.now()} />]))()
    )
  }

  function deleteVariable(id) {
    setVars(
      vars.filter(variable => { return variable.props.id !== id })
    )

  }

  return (
    <Context.Provider value={{ deleteVariable }}>
      <body>
        <header>
          <p>header</p>
        </header>
        <div id="main">
          <Variables vars={vars}
            addNewVariable={addNewVariable} />
          <RightBlock />
        </div>
        <footer>
          <p>footer</p>
        </footer>
      </body>
    </Context.Provider>
  );


}
export default App;