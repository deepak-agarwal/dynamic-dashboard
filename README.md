### Building Dynamic Dashboard with gluestack-ui and esm.sh

#### What is glue stack -ui ?

gluestack-ui is a universal UI library that provides optionally styled and accessible components. It is designed to be easy to use and integrate into existing projects, and it provides a consistent design language across different platforms. gluestack-ui is not a direct replacement for React Native Web, but it builds upon its components to provide additional features and performance improvements.

#### What is esm.sh ?

esm.sh is a fast, smart, and global CDN for modern (ES2015+) web development. It supports bare import specifiers, trailing slashes in import URLs, and a special format for import URLs that allows the use of query parameters with trailing slashes. It also provides a CLI script for managing imports with import maps in Deno and Node/Bun.

> The application will have a widget list from where you can drag and
> drop widgets in the canvas and it will use esm.sh to build on the
> browser and render the widget.

_This tutorial will cover_

1. Setting up the project
2. Creating the UI
3. Adding esm.sh
4. Dynamic import of modules
5. Rendering the module

##### Setting up the project

to create a new project run the folllowing command

```bash
   npm create gluestack

◇  What would you like to build?
│  Web app
◇  What is the  name  of your application?
│  dynamic-dashboard
◇  Would you like to use App Router?
│  Yes
```

The app with gluestack-ui is created.

##### Creating the UI

We create a basic Ui with the widget list consisting of the list of widget and a drop area where the widgets are dropped.
Create a widget render component that will render the widget once its dropped.

##### ESM code.

Create a widget.js file on the public folder and include the below code

```
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
    export function render(): string {
      return <h1>Widget 1</h1>
    }
  `,
    types: `
    export function render(): string;
  `
  })
  const { render } = await import(ret.url)
  return render
}
// to make it accessible through our project we add it to the window object.
window.widget1 = loadLineChartComponent


```

#### Dynamic import when the widget is dragged and dropped.

the following code is used to render the widget once it is dropped.

```
export const WidgetRender = forwardRef((props: WidgetRenderProps, ref) => {
  const [WidgetComponent, setWidgetComponent] = useState(null)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = props.widget.id
    script.async = true
    script.type = 'module'

    script.onload = () => {
      if (window[props.widget.widgetFunction]) {
        window[props.widget.widgetFunction]()
          .then((x) => {
            setWidgetComponent(x())
          })
          .catch((e) => {
            console.log('e', e)
          })
      }
    }

    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const { type, props: customprops } = WidgetComponent || {}

  return (
    <div ref={ref} {...props}>
      <Suspense fallback={<>Loading</>}>
        {WidgetComponent ? (
          <Box h='100%' w='100%' bgColor='$primary500'>
            {React.createElement(type, customprops)}
          </Box>
        ) : null}
      </Suspense>
    </div>
  )
})
```
