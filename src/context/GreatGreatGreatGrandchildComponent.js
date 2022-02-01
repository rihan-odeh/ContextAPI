import React, { useContext } from 'react';
import MyContext from './context/MyContext';
const GreatGreatGreatGrandchildComponent = (props) =>{
    const contexts = useContext(MyContext);
    return(
      <div>
        hello {contexts}
      </div>
    )
}
export default GreatGreatGreatGrandchildComponent;

