import build from 'https://esm.sh/build'
;(async function loadLineChartComponent() {
  const ret = await build({
    dependencies: {
      victory: '^36.6.0',
      react: '^17.0.2'
    },
    code: `
    import React from "react";
    import { VictoryChart,VictoryTheme,VictoryLine } from 'victory'

    export function LineChartComponent(): JSX.Element {
        return <VictoryChart theme={VictoryTheme.material}>
                    <VictoryLine
                        style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc"}
                        }}
                        data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                        ]}
                    />
                </VictoryChart> 
    }
  `,
    // for types checking and LSP completion
    types: `
    export function LineChartComponent(): JSX.Element;
    `
  })
  const { LineChartComponent } = await import(ret.url)

  const lineChart = document.getElementById('line-chart')
  if (lineChart) {
    lineChart.innerHTML = ''
    lineChart.appendChild(LineChartComponent())
  }
})()
