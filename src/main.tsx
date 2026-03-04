import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import DataDeletion from './pages/DataDeletion.tsx'
import TermsOfService from './pages/TermsOfService.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/eliminacion-datos" element={<DataDeletion />} />
        <Route path="/terminos" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
