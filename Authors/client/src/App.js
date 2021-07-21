
import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home'
import NewAuthor from './components/NewAuthor';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <NewAuthor path="/new"/>
        <UpdateAuthor path="/edit/:id"/>
      </Router>
     

    </div>
  );
}

export default App;
