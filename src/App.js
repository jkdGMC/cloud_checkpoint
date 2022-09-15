import './App.css';
import Header from './Components/Header/Header';
import { Map } from './Components/Map/Map';

function App() {

  // const location = {
  //   adresse: 'Fass Delorme, Villa N°19',
  //   latitude: 14.690039,
  //   longitude: -17.454467
  // }

  return (
    <div className="App">
      <Header />
      <Map />
    </div>
  );
}

export default App;
