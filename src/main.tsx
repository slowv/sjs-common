import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {SLVConfig, SLVProvider} from "./app/common/slv/SlvProvider.tsx";
import {banner} from "./app/common/slv/banner.ts";
import App from "./App.tsx";

const version = import.meta.env.VITE_VERSION || '1.0.0';

const config: SLVConfig = {
  port: 5173,
  version: version,
  applicationName: 'SJS Common',
  host: window.location.hostname
}

banner(config)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SLVProvider
      config={config}
    >
      <App/>
    </SLVProvider>
  </StrictMode>,
)
