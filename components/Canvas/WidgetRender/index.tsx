import { Box } from '@gluestack-ui/themed'
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
          .then((x) => {
            console.log('x', x())
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
        {WidgetComponent ? React.createElement(type, customprops) : null}
      </Suspense>
    </div>
  )
})
