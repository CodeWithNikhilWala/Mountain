import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import History from './Components/History';
import Team from './Components/Team';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/history' element={<History/>}></Route>
      <Route path='/team' element={<Team/>}></Route>
    </Routes>
   </Router>
   
   
   </>
  );
}

export default App;
