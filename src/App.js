import './App.css';
import './Styles/Styles.css'
import Menu from './Components/Menu/Menu'
import Topbar from './Components/Topbar/Topbar'

function App() {
  return (
    <div className="App">
      <Topbar />
      <nav>
        <Menu />
      </nav>
    </div>
  );
}

export default App;
