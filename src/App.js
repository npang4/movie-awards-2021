import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/NavBar/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import Ballot from './Components/Ballot/Ballot';
import Login from './Components/Login/Login';

function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ballot' element={<Ballot />} />
      </Routes>


      {/* <h1 className='award-title'> Movie Awards 2021</h1> */}
      {/* <Ballot /> */}
    </div>
  );
}

export default App;
