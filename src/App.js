//import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from '../src/action'
import {signin,signoff} from './action/signin'
function App() {
   const counter = useSelector(state =>state.counter);
   const isLogged = useSelector(state =>state.islog)
   const dispatch =useDispatch();
   console.log("is logged ",isLogged)
  return (
   
    <div  className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=> dispatch(increment())} >+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
 {/* <h1>log in status ${isLogged}</h1> */}
  <h1>
    {`log in status ${isLogged}`}
  </h1>
      <button onClick={()=>dispatch(signin())}>yes</button>
      <button onClick={()=>dispatch(signoff())}>no</button>
   
    </div>

  );
}

export default App;
