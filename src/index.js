import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from "./components/ToDo";
import { Provider } from "react-redux";
import ConfigureStore from "./store/ConfigureStore";
import "./style.css"

const store = ConfigureStore();


store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    console.log(store.getState());
  })




const jsx = (
    <Provider store={store}>
        <ToDoApp/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));


















