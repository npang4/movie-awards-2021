import './App.css';
import Ballot from './Components/Ballot/Ballot';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <div className="App">
      <h1 className='award-title'> Awards 2021</h1>
      <Ballot />
    </div>
  );
}

export default App;
