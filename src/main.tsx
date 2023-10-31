import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';
import Home from "./pages/home";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <Home/>
    </ConfigProvider>
  </React.StrictMode>,
);
