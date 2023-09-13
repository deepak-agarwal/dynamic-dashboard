import React from 'react'

const availableWidgets = [
  {
    previewImg: 'https://via.placeholder.com/80x80',
    previewName: 'Widget 1',
    id: 'ImageWidget1',
    layout: { i: 'ImageWidget', x: 0, y: 0, w: 3, h: 1 },
    resizeHandles: ['e', 'se', 's', 'sw', 'w']
  },
  {
    previewImg: 'https://via.placeholder.com/80x80',
    previewName: 'Widget 2',
    id: 'ImageWidget2',
    layout: { i: 'ImageWidget', x: 0, y: 0, w: 3, h: 1 }
  },
  {
    previewImg: 'https://via.placeholder.com/80x80',
    previewName: 'Widget 3',
    id: 'ImageWidget3',
    layout: { i: 'ImageWidget', x: 0, y: 0, w: 3, h: 1 }
  },
  {
    previewImg: 'https://via.placeholder.com/80x80',
    previewName: 'Widget 4',
    id: 'ImageWidget4',
    layout: { i: 'ImageWidget', x: 0, y: 0, w: 6, h: 1 }
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
