import React, { Suspense } from 'react'
import { createRoot} from 'react-dom/client'
// Components
import App from './src/App.jsx';

const root = createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
)
