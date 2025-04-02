import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');  // Ensure this is 'root'
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);  // Using React 18+
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Root element not found');
}
