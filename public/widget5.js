import build from 'https://esm.sh/build'
import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

export async function loadLineChartComponent() {
  const ret = await build({
    dependencies: {
      react: '^18.2.0',
      victory: '^36.0.0'
    },
    code: `
     import React, { useState } from "react";
import { VictoryPie } from "victory";

const initialState = {
  edit: false,
  title: "GeekyAnts Distribution",
  color: "heatmap"
};

export function App() {
  const [state, setState] = useState(initialState);

  const handleColorChange = (event) => {
    setState({ ...state, color: event.target.value });
  };

  const handleTitleChange = (event) => {
    setState({ ...state, title: event.target.value });
  };

  return (
    <>
      <button onClick={() => setState({ ...state, edit: !state.edit })}>
        {state.edit ? "Close" : "Edit"}
      </button>

      {state.edit ? (
        <>
          <h4>Edit </h4>
          <div style={{ display: "flex" }}>
            <p>Colour:</p>
            <select value={state.color} onChange={handleColorChange}>
              <option value="grayscale">grayscale</option>
              <option value="qualitative">qualitative</option>
              <option value="heatmap">heatmap</option>
              <option value="warm">warm</option>
              <option value="cool">cool</option>
              <option value="red">red</option>
              <option value="green">green</option>
            </select>
          </div>

          <div style={{ display: "flex" }}>
            <p>Title:</p>
            <input
              value={state.title}
              placeholder={"Enter the title"}
              onChange={handleTitleChange}
            />
          </div>

        </>
      ) : (
        <>
          <svg viewBox="0 0 500 500">
            <VictoryPie
              animate={{
                duration: 2000
              }}
              standalone={false}
              width={400}
              height={400}
              data={[
                { x: "Marketing", y: 120 },
                { x: "Sales", y: 150 },
                { x: "Engineering", y: 75 }
              ]}
              colorScale={state.color}
            />
          </svg>
          <h6 style={{ color: "black", paddingLeft:"20%" }}>{state.title}</h6>
        </>
      )}
    </>
  );
}

`,
    // for types checking and LSP completion
    types: `
    export function App(): string;
  `
  })
  const { App } = await import(ret.url)
  return {
    ReactDOM,
    React,
    App
  }
}

window.widget5 = loadLineChartComponent
