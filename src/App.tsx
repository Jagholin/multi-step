import MultipageDialog from './MultipageDialog';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import LastPage from './pages/LastPage';

function App() {

  return (
    <div className="App">
      <MultipageDialog pages={[FirstPage, SecondPage, ThirdPage, LastPage]} pageTitles={["Your info", "Select plan", "Add-ons", "Summary"]} />
    </div>
  )
}

export default App
