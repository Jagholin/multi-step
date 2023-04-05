import './App.css'
import MultipageDialog from './components/MultipageDialog';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import LastPage from './components/LastPage';

function App() {

  return (
    <div className="App">
      <MultipageDialog pages={[FirstPage, SecondPage, ThirdPage, LastPage]} pageTitles={["Your info", "Select plan", "Add-ons", "Summary"]} />
    </div>
  )
}

export default App
