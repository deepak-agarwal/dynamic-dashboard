import { Box, Image } from '@gluestack-ui/themed'
import React from 'react'

const availableWidgets = [
  {
    previewImg: (
      <svg
        width='44'
        height='44'
        viewBox='0 0 44 44'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='44' height='44' rx='4' fill='#8C8C8C' />
        <path
          d='M26 16C26 14.3431 27.3431 13 29 13C30.6569 13 32 14.3431 32 16C32 17.6569 30.6569 19 29 19C28.838 19 28.679 18.9872 28.524 18.9625L26.4862 22.3205C26.8105 22.7997 27 23.3777 27 24C27 25.6569 25.6569 27 24 27C23.0972 27 22.2875 26.6012 21.7375 25.9701L17.9958 27.8407C17.9986 27.8934 18 27.9466 18 28C18 29.6569 16.6569 31 15 31C13.3431 31 12 29.6569 12 28C12 26.3431 13.3431 25 15 25C16.0662 25 17.0025 25.5562 17.5346 26.3943L21.066 24.6288C21.0228 24.4261 21 24.2157 21 24C21 22.3431 22.3431 21 24 21C24.4821 21 24.9376 21.1137 25.3413 21.3158L27.1391 18.3533C26.4452 17.8038 26 16.9539 26 16Z'
          fill='white'
        />
      </svg>
    ),
    previewName: 'Line Graph',
    id: 'widget1.js',
    layout: { i: 'ImageWidget', x: 0, y: 0, w: 3, h: 1 },
    resizeHandles: ['e', 'se', 's', 'sw', 'w'],
    widgetFunction: 'widget1'
  },
  {
    previewImg: (
      <svg
        width='44'
        height='44'
        viewBox='0 0 44 44'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='44' height='44' rx='4' fill='#8C8C8C' />
        <path
          d='M19.75 12H23.7484C24.1626 12 24.4984 12.3358 24.4984 12.75C24.4984 13.1297 24.2162 13.4435 23.8501 13.4932L23.7484 13.5H22.5V30.5H23.7451C24.1248 30.5 24.4385 30.7822 24.4882 31.1482L24.4951 31.25C24.4951 31.6297 24.2129 31.9435 23.8468 31.9932L23.7451 32H19.75C19.3358 32 19 31.6642 19 31.25C19 30.8703 19.2822 30.5565 19.6482 30.5068L19.75 30.5H21V13.5H19.75C19.3703 13.5 19.0565 13.2178 19.0068 12.8518L19 12.75C19 12.3703 19.2822 12.0565 19.6482 12.0068L19.75 12H23.7484H19.75ZM28.2457 14.9969C30.0402 14.9981 31.4947 16.452 31.4966 18.2461L31.4995 25.751C31.5013 27.4837 30.1454 28.9007 28.4361 28.997L28.2497 29.0018L23.5054 29.0013V27.5013H28.3085C29.2484 27.4706 30.0005 26.699 29.9995 25.7521L29.9966 18.2472C29.9956 17.281 29.2118 16.4975 28.2452 16.4969H23.5054V14.9969H28.2457ZM20 14.9969V16.4969H15.25C14.2835 16.4969 13.5 17.2804 13.5 18.2469V25.7513C13.5 26.7178 14.2835 27.5013 15.25 27.5013H19.9953V29.0013H15.25C13.4551 29.0013 12 27.5462 12 25.7513V18.2469C12 16.452 13.4551 14.9969 15.25 14.9969H20Z'
          fill='white'
        />
      </svg>
    ),
    previewName: 'Input Field',
    id: 'widget2.js',
    layout: { i: 'ImageWidget', x: 0, y: 0, w: 3, h: 1 },
    widgetFunction: 'widget2'
  },
  {
    previewImg: (
      <svg
        width='44'
        height='44'
        viewBox='0 0 44 44'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='44' height='44' rx='4' fill='#8C8C8C' />
        <path
          d='M19 15.23C19 13.9873 20.0074 12.98 21.25 12.98H22.75C23.9926 12.98 25 13.9873 25 15.23V31C23.0251 31 21.0084 31 19 31V15.23ZM17.5 20H15.25C14.0074 20 13 21.0073 13 22.25V30.25C13 30.6642 13.3358 31 13.75 31H17.5V20ZM26.5 31H30.25C30.6642 31 31 30.6642 31 30.25V19.25C31 18.0073 29.9926 17 28.75 17H26.5V31Z'
          fill='white'
        />
      </svg>
    ),
    previewName: 'Bar Graph',
    id: 'widget2.js',
    layout: { i: 'ImageWidget', x: 0, y: 0, w: 3, h: 1 },
    widgetFunction: 'widget2'
  }
]

export const WidgetSelector = ({ showDropCanvasFn }) => {
  return (
    <div>
      {availableWidgets.map((widget) => (
        <div
          key={widget.id}
          unselectable='on'
          draggable='true'
          onDragStart={(e) => {
            showDropCanvasFn(true)
            e.dataTransfer.setData('droppableWidget', JSON.stringify(widget))
            return true
          }}
        >
          <div style={{ display: 'flex', margin: '8px' }}>
            {widget.previewImg}

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
