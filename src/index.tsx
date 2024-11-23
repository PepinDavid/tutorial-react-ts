import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import Layout from './pages/layout';
import App from './pages/app/App';
import Contact from './pages/contact/Contact';
import Game from './pages/game/Game';
import Home from './pages/home/Home';
import NoPage from './pages/nopage/NoPage';
import Blog from './pages/blog/Blog';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="center">
      <h3 className="text-primary text-4xl font-bold underline">
        HELLO WORLD
      </h3>
    </div>

    <div className="container">
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='app' element={<App />} />
          <Route path='home' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='game' element={<Game />} />
          <Route path='blog' element={<Blog />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
