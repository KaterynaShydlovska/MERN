
import './App.css';
import Context from './context/Context';
import Navbar from './components/Navbar';
import WrapperComponent from './components/Wrapper';
import FormWrapper from './components/FormWrapper';
import {useState} from 'react';

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <Context.Provider value={{name, setName}}>
        <WrapperComponent>
           <Navbar/>
           <FormWrapper/> 
        </WrapperComponent>
      </Context.Provider>
    </div>
  );
}

export default App;
