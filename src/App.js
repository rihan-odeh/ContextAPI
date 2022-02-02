import React,{useState} from 'react';
import Wrapper from './Components/Wrapper'
import Navbar from './Components/Navbar'
import FormWrapper from './Components/FormWrapper'
import './App.css';

function App() {
  const [val, setVal] = useState(1);
  return (
    <div className="App">
      <Wrapper>
      <Navbar/>
      <FormWrapper />
    </Wrapper>
      
    </div>
  );
}
export default App;