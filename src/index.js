import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import { apiSlice } from './features/api/apiSlice';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApiProvider api={apiSlice}>
      <Router>
        <Routes>
            <Route path='/*' element={<App/>}/>
        </Routes>
      </Router>
    </ApiProvider>
 
);
