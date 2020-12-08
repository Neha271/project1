import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import allReducer from '../src/reducer/index'

import {Provider} from 'react-redux'
const store = createStore( allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

//import {createStore} from 'redux';
// //let store=createStore(redux)
// //store-> global state
// //action--> desc what u wannna do--> increment--> fuction returns in object
// const increment = ()=>{
//   return{
//     type: 'INCREMENT'
//   }

// }
// const decrement = ()=>{
//   return{
//     type: 'DECREMENT'
//   }

// }

// //reducer
// const counter = (state = 0, action) =>{
//   switch (action.type){
//     case 'INCREMENT':
//       return  state + 1;
//     case 'DECREMENT':
//       return state - 1;
//       default: return state;
//   }
  
// };
// let store = createStore(counter);
// //display
// store.subscribe(()=> console.log(store.getState()));

// //dispatch
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(increment())
// store.dispatch(increment())

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>  
   <App /> 
   </Provider> ,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
