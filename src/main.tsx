import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Toaster } from 'sonner';
import App from "./App.tsx";
import "./index.css";
import { LanguageProvider } from '@/contexts/LanguageContext';
import zh from '@/locales/zh';
import en from '@/locales/en';
import id from '@/locales/id';

// 整合所有语言资源
const resources = {
  zh,
  en,
  id
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
     {/* 对于GitHub Pages部署，使用HashRouter替代BrowserRouter以避免404问题 */}
       <HashRouter basename={process.env.NODE_ENV === 'production' ? '/bagusnya.github.io' : '/'}>
      <LanguageProvider resources={resources}>
        <App />
        <Toaster />
      </LanguageProvider>
    </HashRouter>
  </StrictMode>
);