import React from 'react';
import logo from './logo.svg';
import './App.css';
// let index = require ("public/index.html");

// const form: HTMLFormElement = document.querySelector('#defineform');
//
//
// form.onsubmit = () => {
//     const formData = new FormData(form);
//     console.log(formData);
//     const text = formData.get('defineword') as string;
//     console.log(text);
//     return false; // prevent reload
//
// };



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       <h1>Typescript Dictionary</h1>
//       </header>
//     </div>
//   );
// }
//
// export default App;


function App() {

    const form: HTMLFormElement = document.querySelector('#defineform');


form.onsubmit = () => {
    const formData = new FormData(form);
    console.log(formData);
    const text = formData.get('defineword') as string;
    console.log(text);
    return false; // prevent reload

};
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Typescript Dictionary</h1>
            </header>
        </div>
    );
}

export default App;


