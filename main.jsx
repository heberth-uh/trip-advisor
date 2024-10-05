import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
// Components
import App from './src/App.jsx';
// Context
import { MainContextProvider } from './src/context/MainContext.jsx';

const root = createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>
)
