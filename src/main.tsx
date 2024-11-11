// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )






// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import 'antd/dist/antd.css';

// ReactDOM.render(<App />, document.getElementById('root'));






// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import "./App.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );









// // main.tsx yoki index.tsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';  // Diqqat: `react-dom/client` dan import qilamiz
// import App from './App';

// const rootElement = document.getElementById('root');  // HTML faylida asosiy ildiz elementingiz
// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);   // createRoot funksiyasidan foydalanamiz
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }






// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );












// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const rootElement = document.getElementById('root');
// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }










import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
