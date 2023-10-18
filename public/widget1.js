import build from 'https://esm.sh/build'
import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

export async function loadLineChartComponent() {
  const ret = await build({
    dependencies: {
      react: '^18.0.1',
      victory: '^36.0.0'
    },
    code: `
    import React from "react";
    import { VictoryLine, VictoryContainer } from "victory";
    export function App(){
        return <div style={{backgroundColor: 'azure', height:'100%', width:'100%'}}>

          <VictoryLine
            animate={{ duration: 1500 }}
            containerComponent={
              <VictoryContainer
                title="Line Chart"
                desc="This is a line chart for displaying data."
              />
            }
          />
        </div>
      };
  `,
    types: `
    export function App();
  `
  })
  const { App } = await import(ret.url)
  return {
    ReactDOM,
    React,
    App
  }
}

window.widget1 = loadLineChartComponent
