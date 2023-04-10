import MultipageDialog from './MultipageDialog';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import LastPage from './pages/LastPage';
import ThankYou from './pages/ThankYou';

function App() {

  return (
    <div className="App">
      <MultipageDialog 
        pages={[FirstPage, SecondPage, ThirdPage, LastPage]} 
        pageTitles={["Your info", "Select plan", "Add-ons", "Summary"]}
        lastPage={ThankYou} />
    </div>
  )
}

export default App
