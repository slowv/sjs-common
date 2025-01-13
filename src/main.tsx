import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {SLVProvider} from "./app/common/slv/SlvProvider.tsx";
import {banner} from "./app/common/slv/banner.ts";
import App from "./App.tsx";

const version = import.meta.env.VITE_VERSION || '1.0.0';
const applicationName = import.meta.env.APPLICATION_NAME;

banner(version, applicationName)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SLVProvider
      config={{version}}
    >
      <App/>
    </SLVProvider>
  </StrictMode>,
)
