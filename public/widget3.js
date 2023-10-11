import build from 'https://esm.sh/build'
export async function loadLineChartComponent() {
  const ret = await build({
    dependencies: {
      react: '^18.0.1',
      victory: '^36.0.0'
    },
    code: `
     import React from "react";
     import {VictoryCandlestick} from "victory";
    export function render(): string {
      const containerStyle = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "gray"
    };

    const data = [
  { x: new Date(2016, 6, 1), open: 9, close: 30, high: 56, low: 7 },
  { x: new Date(2016, 6, 2), open: 80, close: 40, high: 120, low: 10 },
  { x: new Date(2016, 6, 3), open: 50, close: 80, high: 90, low: 20 },
  { x: new Date(2016, 6, 4), open: 70, close: 22, high: 70, low: 5 },
];

      return <div style={containerStyle}>

          <VictoryCandlestick
            candleColors={{ positive: "#8BC34A", negative: "#C62828" }}
            data={data}
            animate={{ duration: 1500 }}

            style={{ data: { stroke: "none" }, closeLabels: { fill: "blue" } }}
            size={8}
            openLabels={({ datum }) => datum.open}
            closeLabels={({ datum }) => datum.close}
            lowLabels={({ datum }) => datum.low}
            highLabels={({ datum }) => datum.high}
            labelOrientation={{ open: "top", high: "top" }}
          />
        </div>
    }
  `,
    // for types checking and LSP completion
    types: `
    export function render(): string;
  `
  })
  const { render } = await import(ret.url)
  return render
}

window.widget3 = loadLineChartComponent
