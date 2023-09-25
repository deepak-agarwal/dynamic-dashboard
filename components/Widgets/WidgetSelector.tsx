import { Box, Image } from '@gluestack-ui/themed'
import React from 'react'

const availableWidgets = [
  {
    previewImg: 'https://via.placeholder.com/50x50',
    previewName: 'Widget 1',
    id: 'widget1.js',
    layout: { i: 'ImageWidget', x: 0, y: 0, w: 3, h: 1 },
    resizeHandles: ['e', 'se', 's', 'sw', 'w'],
    widgetFunction: 'widget1'
  },
  {
    previewImg: 'https://via.placeholder.com/50x50',
    previewName: 'Widget 2',
    id: 'widget2.js',
    layout: { i: 'ImageWidget', x: 0, y: 0, w: 3, h: 1 },
    widgetFunction: 'widget2'
  }
]

export const WidgetSelector = ({ showDropCanvasFn }) => {
  return (
    <div style={{ borderBottom: '1px solid' }}>
      {availableWidgets.map((widget) => (
        <div
          key={widget.id}
          unselectable='on'
          onDragStart={(e) => {
            showDropCanvasFn(true)
            e.dataTransfer.setData('droppableWidget', JSON.stringify(widget))
            return true
          }}
        >
          <div style={{ display: 'flex', margin: '8px' }}>
            <img
              src={widget.previewImg}
              style={{ width: '50', height: '50' }}
            />
            <Box
              style={{
                alignContent: 'center',
                justifyContent: 'center',
                display: 'flex'
              }}
              m={8}
            >
              {widget.previewName}
            </Box>
          </div>
        </div>
      ))}
    </div>
  )
}
