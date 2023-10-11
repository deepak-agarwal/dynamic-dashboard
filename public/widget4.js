import build from 'https://esm.sh/build'
export async function loadLineChartComponent() {
  const ret = await build({
    dependencies: {
      react: '^18.0.1',
      victory: '^36.0.0'
    },
    code: `
     import React from "react";
     import {VictoryPie} from "victory";
    export function render(): string {
      const containerStyle = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "gray"
    };



      return          <VictoryPie
            style={{ parent: containerStyle, labels: { fill: "magenta" } }}
            radius={100}
            labelPosition="startAngle"
            labelPlacement="parallel"
            data={[
              { x: 1, y: 1, l: 0 },
              { x: 2, y: 1, l: 45 },
              { x: 3, y: 1, l: 90 },
              { x: 4, y: 1, l: 135 },
              { x: 5, y: 1, l: 180 },
              { x: 6, y: 1, l: 225 },
              { x: 7, y: 1, l: 270 },
              { x: 8, y: 1, l: 315 },
            ]}
          />
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

window.widget4 = loadLineChartComponent
