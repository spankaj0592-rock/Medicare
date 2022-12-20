 
import './App.css';
import Home from './Components/Home';
import LeftBar from './Components/LeftBar';
import Navbar from './Components/Navbar';
import RightSide from './Components/RightSide';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <LeftBar/>
     <RightSide/>
    </div>
  );
}

export default App;
