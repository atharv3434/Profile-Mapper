import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const root = document.getElementById('root');
const rootElement = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

ReactDOM.createRoot(root).render(rootElement);