import './App.css';
import Store from './components/Store';
import { DATA } from './constants';

function App() {
  const data = DATA;
  
  return (
    <div className="App">
      <Store products={data} />
    </div>
  );
}

export default App;
