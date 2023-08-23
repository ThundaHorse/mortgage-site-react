import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Main style
import './styles/main.scss';

// MUI
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';

// Routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import { PageHeader } from './modules/PageHeader/PageHeader';
import { PageFooter } from './modules/PageFooter/PageFooter';
import { Home, LearnMore, Reviews, PrivacyPolicy } from './pages/index';

import { CookiesProvider } from 'react-cookie';

const routing = (
  <Router>
    <PageHeader />
    <CssBaseline />
    <Container
      maxWidth='false'
      disableGutters={true}
    >
      <CookiesProvider>
        <main>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/learn-more'
              element={<LearnMore />}
            />
            <Route
              path='/reviews'
              element={<Reviews />}
            />
            <Route
              path='/privacy-policy'
              element={<PrivacyPolicy />}
            />
          </Routes>
        </main>
      </CookiesProvider>
    </Container>
    <PageFooter />
  </Router>
);

const root = createRoot(document.getElementById('root'));
root.render(routing);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
