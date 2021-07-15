import Variables from './components/Variables'
import RightBlock from './components/RightBlock'
import Variable from './components/Variable'
import './styles.css'
import Context from './context'
import React from 'react'
function App() {

  // TODO 
  // vars contains nil to maintain logic of state changin. That's look like bad practice
  // ask to Vitay
  const [vars, setVars] = React.useState([])



  function addNewVariable() {
    setVars(
      (() => vars.concat([<Variable deleteVariable={deleteVariable} id={Date.now()} key={Date.now()} />]))()
    )
  }

  function deleteVariable(id) {
    setVars(
      vars.map(variable => (variable?.props.id === id) ? null: variable)
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