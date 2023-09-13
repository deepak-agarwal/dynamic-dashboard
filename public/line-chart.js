import build from 'https://esm.sh/build'

async function loadLineChartComponent() {
  const ret = await build({
    dependencies: {
      recharts: '^2.0.10'
    },
    code: `
    /* @jsx h */
    import React from "react";
    import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
    
    function LineChartComponent(): JSX.Element {
      const data = [
        { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
        { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
        { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
        { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
        { name: "May", uv: 1890, pv: 4800, amt: 2181 },
        { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
        { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
      ];

      return (
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
        </LineChart>
      );
    }
  `,
    // for types checking and LSP completion
    types: `
    export function LineChartComponent(): JSX.Element;
    `
  })

  // import module
  const { render } = await import(ret.url)
  render()
  console.log(ret)
}

loadLineChartComponent()
// Render the LineChartComponent
