import './App.css';
import Listing from './components/Listing';
const data = require('./data/etsy.json')

function App() {
  return (
    <div className="App">
      <Listing items={JSON.parse(JSON.stringify(data))} />
    </div>
  );
}

export default App;
