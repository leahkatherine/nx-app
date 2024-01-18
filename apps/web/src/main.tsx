import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  AppProvider,
  AuthProvider,
  ToastProvider,
} from '@react-monorepo/design-system';
import { LayoutWrapper } from '@react-monorepo/feat-nav';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <LayoutWrapper>
            <ToastProvider>
              <App />
            </ToastProvider>
          </LayoutWrapper>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
