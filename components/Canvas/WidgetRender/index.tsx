import { Box } from '@gluestack-ui/themed'
import React, { forwardRef, Suspense, useEffect, useState } from 'react'

export const WidgetRender = forwardRef((props, ref) => {
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
          <Box h='100' w='100' bgColor='$primary500'>
            {React.createElement(type, customprops)}
          </Box>
        ) : null}
      </Suspense>
    </div>
  )
})
