import React from 'react'

const availableWidgets = [
  {
    previewImg: 'https://via.placeholder.com/80x80',
    previewName: 'Widget 1',
    id: 'widget1.js',
    layout: { i: 'ImageWidget', x: 0, y: 0, w: 3, h: 1 },
    resizeHandles: ['e', 'se', 's', 'sw', 'w'],
    widgetFunction: 'widget1'
  },
  {
    previewImg: 'https://via.placeholder.com/80x80',
    previewName: 'Widget 2',
    id: 'widget2.js',
    layout: { i: 'ImageWidget', x: 0, y: 0, w: 3, h: 1 },
    widgetFunction: 'widget2'
  }
]

export const WidgetSelector = () => {
  return (
    <div style={{ borderBottom: '1px solid' }}>
      {availableWidgets.map((widget) => (
        <div
          key={widget.id}
          unselectable='on'
          onDragStart={(e) => {
            e.dataTransfer.setData('droppableWidget', JSON.stringify(widget))
            return true
          }}
        >
          <img src={widget.previewImg} />
          <div>{widget.previewName}</div>
        </div>
      ))}
    </div>
  )
}
