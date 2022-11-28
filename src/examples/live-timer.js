import React from 'react';
import ReactDOM from 'react';

// Live Running Time
function App(props){
    const element = <h1>hello {new Date().toLocaleTimeString()}</h1>;
    root.render(element);
}
setInterval(App,1000);
let root = ReactDOM.createRoot(document.getElementById('root'));
