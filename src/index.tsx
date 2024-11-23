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
import CreatePost from './containers/create-post/CreatePost';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header className="navbar navbar-expand-lg bd-navbar sticky-top">
        <Layout />
      </header>

      <div className="text-center">
        <h3 className="text-primary text-4xl font-bold underline">
          HELLO WORLD TEST REACT IN TS
        </h3>
      </div>

      <div className="container">
        <Routes>
          <Route path='app' element={<App />} />
          <Route path='home' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='game' element={<Game />} />
          <Route path='blog' element={<Blog />} />
          <Route path='create-article' element={<CreatePost />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
