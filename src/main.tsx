import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from '@tanstack/react-query';
import { Global, ThemeProvider } from '@emotion/react';

import { queryClient } from '@/services';
import { globalStyles, theme } from '@/styles';
import { Router } from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>,
);
