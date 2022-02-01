import React,{useState} from 'react';
import Wrapper from './context/Wrapper'
import Navbar from './context/Navbar'
import FormWrapper from './context/FormWrapper'
import './App.css';
import Form from './context/Form';
function App() {
  const [val, setVal] = useState(1);
  return (
    <div className="App">
      <Form></Form>
      
    </div>
  );
}
export default App;