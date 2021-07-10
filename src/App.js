import './App.css';
import Variables from './components/Variables'
import RightBlock from './components/RightBlock'
import './styles.css'
function App() {
  return (
    <body>
      <header>
        <p>header</p>
      </header>
      <div id="main">
          
          <Variables />
          
          
          <div class="input">
            <form name="expressionField">
                <input></input>
            </form>
          </div>


          <RightBlock />
      </div>
      <footer>
        <p>footer</p>
      </footer>
    </body>
  );
}

export default App;
