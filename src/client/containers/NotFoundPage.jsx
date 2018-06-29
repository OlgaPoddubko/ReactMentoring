import React from 'react';

import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';

const NotFoundPage = () => (
      <React.Fragment>
        <ErrorBoundary >
          <Header />
          <NotFound />
          <Footer />
        </ErrorBoundary>
      </React.Fragment>
    );

export default NotFoundPage;
