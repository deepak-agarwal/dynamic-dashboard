import build from 'https://esm.sh/build'
export async function loadLineChartComponent() {
  const ret = await build({
    dependencies: {
      react: '^18.0.1',
      victory: '^36.0.0'
    },
    code: `
     import React from "react";
     import {VictoryBar} from "victory";
    export function render(): string {
      const containerStyle = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "gray"
    };

      return <div style={containerStyle}>

          <VictoryBar
            cornerRadius={4}
            animate={{ duration: 1500 }}

            scale={{ y: "log", x: "linear" }}
            horizontal
            data={[
              { x: 1, y: 0.1 },
              { x: 2, y: 1 },
              { x: 3, y: 10 },
              { x: 4, y: 0 },
              { x: 5, y: 0.1 },
              { x: 6, y: 1 },
              { x: 7, y: 10 },
              { x: 8, y: 100 },
            ]}
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

window.widget2 = loadLineChartComponent
