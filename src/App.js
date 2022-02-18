import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { Layout } from './component/Layout';

import { MainPage } from "./pages/MainPage";
import { MoviePage } from "./pages/MoviePage";
import { NoMatch } from './pages/NoMatch';

const App = () => {
    let routes = useRoutes([
      { path: "/", element: <MainPage /> },
      { path: "/move/:id", element: <MoviePage />},
      { path: "*", element: <NoMatch /> },
    ]);
    return routes;
  };
  
export const AppWrapper = () => {
    return (
    <Layout>
        <Router>
            <App />
        </Router>
    </Layout>
    );
};