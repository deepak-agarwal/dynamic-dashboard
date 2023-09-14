import React, { forwardRef, Suspense, useEffect, useState } from 'react'

// const loadWidget = (widget) => {
//   return React.lazy(() => import(`../Widgets/${widget}`))
// }

export const WidgetRender = forwardRef((props, ref) => {
  //   const { widget } = props
  //   const [WidgetComponent] = useState(loadWidget(widget))

  let component = null

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'line-chart.js'
    script.async = true
    script.type = 'module'

    script.onload = () => {
      console.log('window', window, window.loadLineChartComponent)
      if (window.loadLineChartComponent) {
        component = window.loadLineChartComponent()
      }
    }

    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div ref={ref} {...props}>
      <Suspense fallback={<>Loading</>}>
        {/* <WidgetComponent />
        {props.children}
        <div id='line-chart'></div> */}
        {component}
      </Suspense>
    </div>
  )
})
