import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//Calcite Imports
import { setAssetPath } from '@esri/calcite-components/dist/components';
setAssetPath("https://js.arcgis.com/calcite-components/2.13.0/assets");
import '@esri/calcite-components/dist/calcite/calcite.css';

//ArcGIS Core SDK
import "@arcgis/core/assets/esri/themes/light/main.css"

// Calcite Asset import
import "@esri/calcite-components/dist/components/calcite-table";
import "@esri/calcite-components/dist/components/calcite-table-row";
import "@esri/calcite-components/dist/components/calcite-table-header";
import "@esri/calcite-components/dist/components/calcite-table-cell";




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
