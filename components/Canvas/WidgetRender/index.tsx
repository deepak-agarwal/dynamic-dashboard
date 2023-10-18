import { Text } from '@gluestack-ui/themed'
import React, { forwardRef, Suspense, useEffect, useState } from 'react'
interface WidgetRenderProps {
  widget: {
    id: string
    widgetFunction: string
  }
}

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
          .then((x: React.SetStateAction<null>) => {
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
    <div ref={ref} {...props} id={props.widget.id} style={{ height: '100%' }}>
      <Suspense fallback={<>Loading</>}>
        {WidgetComponent
          ? WidgetComponent.ReactDOM.render(
              WidgetComponent.React.createElement(WidgetComponent.App),
              document.getElementById(`${props.widget.id}`)
            )
          : null}
      </Suspense>
    </div>
  )
})
