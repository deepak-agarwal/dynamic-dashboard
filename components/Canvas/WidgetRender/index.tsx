import React, { forwardRef, Suspense, useEffect, useState } from 'react'

// const loadWidget = (widget) => {
//   return React.lazy(() => import(`./public/line-chart.js`))
// }

export const WidgetRender = forwardRef((props, ref) => {
  const { widget } = props
  //   const [WidgetComponent] = useState(loadWidget(widget))

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'line-chart.js'
    script.async = true
    script.type = 'module'
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div ref={ref} {...props}>
      <Suspense fallback={<>Loading</>}>
        {/* <WidgetComponent /> */}
        {/* {props.children} */}
        <div id='lazy-load-container'></div>
      </Suspense>
    </div>
  )
})
