import './App.css';
import Ballot from './Components/Ballot/Ballot';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/NavBar/Navbar'
function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <div className="App">
      <Navbar/>
      <h1 className='award-title'> Movie Awards 2021</h1>
      <Ballot />
    </div>
  );
}

export default App;
