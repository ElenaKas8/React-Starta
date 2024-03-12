import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
   <App />
);

function App() {
    return (
      <div>
        <InfoText />
       </div>
    );
}


function InfoText() {
    return (
        <div>
            <h1>Heading</h1>
            <p>Message Info</p>
        </div>
    );
}