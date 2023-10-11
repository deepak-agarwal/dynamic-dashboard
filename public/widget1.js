import build from 'https://esm.sh/build'
export async function loadLineChartComponent() {
  const ret = await build({
    dependencies: {
      react: '^18.0.1',
      victory: '^36.0.0'
    },
    code: `
    import React from "react";
    import { VictoryLine, VictoryContainer } from "victory";
    export function chart(){
        return <div style={{backgroundColor: 'azure'}}>

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
    export function chart();
  `
  })
  const { chart } = await import(ret.url)
  return chart
}

window.widget1 = loadLineChartComponent
