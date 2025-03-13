import './App.css'
import { CalciteTableCell, CalciteTable, CalciteTableRow, CalciteTableHeader} from '@esri/calcite-components-react'

function App() {

  return (
    <>
      <div className='flex flex-col h-screen w-full gap-y-10 justify-center items-center'>
        <div className='flex flex-row text-5xl font-bold'>
          <p>Welcome to arcgis-react-template</p>
        </div>
        <div className='flex flex-col text-xl font-semi p-4 items-center justify-center gap-y-4'>
          <p>This template contains all of the tools needed to start an ArcGIS React Project.</p>
          <CalciteTable striped caption="Packages included">
            <CalciteTableRow slot="table-header">
              <CalciteTableHeader heading="Package Name"></CalciteTableHeader>
              <CalciteTableHeader heading="Version"></CalciteTableHeader>
              <CalciteTableHeader heading="Description"></CalciteTableHeader>
            </CalciteTableRow>
            <CalciteTableRow>
              <CalciteTableCell>Vite</CalciteTableCell>
              <CalciteTableCell>6.2.1</CalciteTableCell>
              <CalciteTableCell>Build Tool</CalciteTableCell>
            </CalciteTableRow>
            <CalciteTableRow>
              <CalciteTableCell>React</CalciteTableCell>
              <CalciteTableCell>19.0.0</CalciteTableCell>
              <CalciteTableCell>Rendering Frontend UI</CalciteTableCell>
            </CalciteTableRow>
            <CalciteTableRow>
              <CalciteTableCell>TypeScript</CalciteTableCell>
              <CalciteTableCell>5.8.2</CalciteTableCell>
              <CalciteTableCell>Type Checking for JavaScript</CalciteTableCell>
            </CalciteTableRow>
            <CalciteTableRow>
              <CalciteTableCell>@arcgis/core</CalciteTableCell>
              <CalciteTableCell>4.32.8</CalciteTableCell>
              <CalciteTableCell>The ArcGIS JS SDK Core</CalciteTableCell>
            </CalciteTableRow>
            <CalciteTableRow>
              <CalciteTableCell>@esri/calcite-components-react</CalciteTableCell>
              <CalciteTableCell>3.0.3</CalciteTableCell>
              <CalciteTableCell>Web Component Library by Esri</CalciteTableCell>
            </CalciteTableRow>
            <CalciteTableRow>
              <CalciteTableCell>Zustand</CalciteTableCell>
              <CalciteTableCell>5.0.3</CalciteTableCell>
              <CalciteTableCell>Simple State Management for React</CalciteTableCell>
            </CalciteTableRow>
            <CalciteTableRow>
              <CalciteTableCell>TailwindCSS</CalciteTableCell>
              <CalciteTableCell>4.0.14</CalciteTableCell>
              <CalciteTableCell>Utility CSS Classes</CalciteTableCell>
            </CalciteTableRow>
          </CalciteTable>
        </div>
      </div>
    </>
  )
}

export default App
