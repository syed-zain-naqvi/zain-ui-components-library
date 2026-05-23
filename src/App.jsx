import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { ToastProvider } from '@/context/ToastContext';
import { ModalProvider } from '@/context/ModalContext';
import { SidebarProvider } from '@/context/SidebarContext';
import Router from '@/router';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <ModalProvider>
          <SidebarProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </SidebarProvider>
        </ModalProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
