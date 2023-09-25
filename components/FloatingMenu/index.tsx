import React from 'react'
import {
  Box,
  Input,
  InputField,
  InputIcon,
  SearchIcon
} from '@gluestack-ui/themed'
import { WidgetSelector } from '../Widgets/WidgetSelector'

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

const widgetList = [
  {
    id: '1',
    name: 'Line Chart',
    icon: 'text',
    tags: ['line', 'chart', 'line chart'],
    sourceURL: 'https://www.chartjs.org/docs/latest/charts/line.html'
  },
  {
    id: '2',
    name: 'Bar Chart',
    icon: 'image',
    tags: ['bar', 'chart', 'bar chart'],
    sourceURL: 'https://www.chartjs.org/docs/latest/charts/bar.html'
  },
  {
    id: '3',
    name: 'Pie Chart',
    icon: 'image',
    tags: ['pie', 'chart', 'pie chart'],
    sourceURL: 'https://www.chartjs.org/docs/latest/charts/doughnut.html'
  },
  {
    id: '4',
    name: 'Table',
    icon: 'image',
    tags: ['table', 'table chart'],
    sourceURL: 'https://www.chartjs.org/docs/latest/charts/doughnut.html'
  }
]

const Widget = ({ widget }) => {
  return (
    <div
      // style={{ display: 'flex' }}
      key={widget.id}
      unselectable='on'
      onDragStart={(e) => {
        e.dataTransfer.setData('droppableWidget', JSON.stringify(widget))
        return true
      }}
    >
      {/* <Box w={'50px'} h={'50px'} bg={'#ccc'} borderRadius={'5px'} m={'$2'} />
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        m={'$2'}
      >
        <Box fontSize={'14px'} color={'#fff'}>
          {widget.name}
        </Box>
      </Box> */}
      {/* <div
        key={widget.id}
        unselectable='on'
        onDragStart={(e) => {
          e.dataTransfer.setData('droppableWidget', JSON.stringify(widget))
          return true
        }}
      > */}
      <img src={widget.icon} />
      <div>{widget.name}</div>
      {/* </div> */}
    </div>
  )
}

export const FloatingMenu = ({ showDropCanvasFn }) => {
  console.log('widgetList', widgetList, showDropCanvasFn)
  return (
    <Box h={'100%'}>
      <Box m='$2' bg='#737373'>
        <Input
          variant='outline'
          size='md'
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputIcon as={SearchIcon} m={'$2'} />
          <InputField color='white' placeholder='Search' />
        </Input>
      </Box>
      <Box>
        {/* {widgetList.map((widget, index) => (
          <Widget key={index} widget={widget} />
        ))} */}
        <WidgetSelector showDropCanvasFn={showDropCanvasFn} />
      </Box>
    </Box>
  )
}
