import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// import '../src/data/types';
// import '../src/data/generics';
import '../src/data/practice';
// import '../src/data/enum';
// import '../src/data/additionalTypes';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
