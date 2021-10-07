import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');


    setTimeout(() => 
  // the show/hide functions are passed as props
  ReactDOM.render(
    <React.StrictMode>
    <App
      hideLoader={hideLoader}
      showLoader={showLoader} 
      />
      </React.StrictMode>,
    document.getElementById('root')
  )
, 1000);
