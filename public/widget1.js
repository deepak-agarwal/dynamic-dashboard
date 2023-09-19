import build from 'https://esm.sh/build'
export async function loadLineChartComponent() {
  const ret = await build({
    dependencies: {
      preact: '^10.13.2',
      'preact-render-to-string': '^6.0.2'
    },
    code: `
    /* @jsx h */
    import { h } from "preact";
    import { renderToString } from "preact-render-to-string";
    export function render(): string {
      return <h1>Widget 1</h1>
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

window.widget1 = loadLineChartComponent
