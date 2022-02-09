import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './component/Header';
import { Content } from './component/Content';
import { Footer } from './component/Footer';
import './index.scss';

ReactDOM.render(
    <div className="wrapper">
      <Header />
      <Content />
      <Footer />
    </div>,
    document.getElementById('root')
);