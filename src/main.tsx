import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
      <LanguageProvider resources={resources}>
        <App />
        <Toaster />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
