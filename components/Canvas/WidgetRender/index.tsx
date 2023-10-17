import { Box } from '@gluestack-ui/themed'
import React, { forwardRef, Suspense, useEffect, useState } from 'react'
import { Resizable } from 'react-resizable'
interface WidgetRenderProps {
  widget: {
    id: string
    widgetFunction: string
  }
}

export const WidgetRender = forwardRef((props: WidgetRenderProps, ref) => {
  const [WidgetComponent, setWidgetComponent] = useState(null)
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)

  const onFirstBoxResize = (event: any, { element, size, handle }: any) => {
    setWidth(size.width)
    setHeight(size.height)
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = props.widget.id
    script.async = true
    script.type = 'module'

    script.onload = () => {
      if (window[props.widget.widgetFunction]) {
        window[props.widget.widgetFunction]()
          .then((x: React.SetStateAction<null>) => {
            console.log('x', x)
            setWidgetComponent(x)
          })
          .catch((e: any) => {
            console.log('e', e)
          })
      }
    }

    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div ref={ref} {...props} id={props.widget.id}>
      <Suspense fallback={<>Loading</>}>
        {WidgetComponent ? (
          <Resizable
            height={height}
            width={width}
            onResize={onFirstBoxResize}
            resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
          >
            <div style={{ width: width + 'px', height: height + 'px' }}>
              {WidgetComponent.ReactDOM.render(
                WidgetComponent.React.createElement(WidgetComponent.App),
                document.getElementById(`${props.widget.id}`)
              )}
            </div>
          </Resizable>
        ) : null}
      </Suspense>
    </div>
  )
})
