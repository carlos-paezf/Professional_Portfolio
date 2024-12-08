import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './app/helpers/i18n.ts';
import './assets/styles/main.scss';

import { App } from './App.tsx';
import { ThemeProvider } from './app/context';


createRoot( document.getElementById( 'root' )! ).render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>,
);
