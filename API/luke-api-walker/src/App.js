import { Router } from '@reach/router';
import './App.css';
import PeopleComponent from './Components/PeopleComponent';
import PlanetsComponent from './Components/PlanetsComponent';
import StarShipsComponent from './Components/StarShipsComponent';
import Home from './Components/Home'
function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <PeopleComponent path='/people/:id'/>
        <PlanetsComponent path='/planets/:id'/>
        <StarShipsComponent path='/starships/:id'/>
      </Router>

    </div>
  );
}

export default App;
