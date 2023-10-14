import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './Components/Header';
import Login from './Components/Login';
import './App.css';
import Home from './Components/Home';
import Details from './Components/Details';


function App() {
  return (
    <div className="App">
     <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/detail/" element={<Details/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
