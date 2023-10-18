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
  color: "heatmap",
  showDropdown: false
};

export function App() {
  const [state, setState] = useState(initialState);

  const handleColorChange = (event) => {
    setState({ ...state, color: event.target.value });
  };

  const handleTitleChange = (event) => {
    setState({ ...state, title: event.target.value });
  };

  const handleEditTitle = () => {
    setState({ ...state, edit: true });
  };

  const handleSaveTitle = () => {
    setState({ ...state, edit: false });
  };

  const handleToggleDropdown = () => {
    setState({ ...state, showDropdown: !state.showDropdown });
  };

  return (
    <div style={{ height: "100%" }}>
      <div>
        <svg viewBox="0 0 450 400">
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
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ marginRight: "30%" }}>
          {state.edit ? (
            <input
              value={state.title}
              placeholder={"Enter the title"}
              onChange={handleTitleChange}
              onBlur={handleSaveTitle}
            />
          ) : (
            <h4
              style={{ color: "black" }}
              onClick={handleEditTitle}
              onDoubleClick={handleEditTitle}
            >
              {state.title}
            </h4>
          )}
        </div>

        <div className="custom-dropdown-global">
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
      </div>
    </div>
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
