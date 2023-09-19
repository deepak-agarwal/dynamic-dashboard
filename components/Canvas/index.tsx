import React, { useState, useCallback, useEffect } from 'react'
import GridLayout, { Layout } from 'react-grid-layout'
import { WidgetRender } from './WidgetRender'
import { Box } from '@gluestack-ui/themed'

export const Canvas = () => {
  const [widgets, setWidgets] = useState([])

  const onLayoutChange = useCallback(
    (_: any, oldItem: { i: any }, newItem: any) => {
      const newWidgetArr = [...widgets]
      newWidgetArr.forEach((x) => {
        if (x.id === oldItem.i) {
          x.layout = newItem
        }
      })
      setWidgets(newWidgetArr)
    },
    [widgets]
  )

  const onDrop = useCallback(
    (_: Layout[], item: Layout, e: DragEvent) => {
      const raw = e.dataTransfer?.getData('droppableWidget')
      if (!raw) {
        return
      }

      const droppableWidget = JSON.parse(raw) as IWidget<IWidgetDefaultProps>

      const newWidgetArr = [...widgets]

      droppableWidget.layout.x = item.x
      droppableWidget.layout.y = item.y
      droppableWidget.layout.isDraggable = true
      newWidgetArr.push(droppableWidget)

      setWidgets(newWidgetArr)
    },
    [widgets]
  )

  useEffect(() => {}, [widgets])

  return (
    <Box borderBlockColor={'black'} h='100%' w='100%'>
      <GridLayout
        autoSize
        preventCollision
        useCSSTransforms
        isDroppable
        isResizable
        compactType={null}
        width={1000}
        height={1000}
        onDrop={onDrop}
        onDragStop={onLayoutChange}
        onResizeStop={onLayoutChange}
      >
        {widgets.map((widget, index) => (
          <WidgetRender
            key={widget.id + index}
            widget={widget}
            data-grid={widget.layout}
          />
        ))}
      </GridLayout>
    </Box>
  )
}
