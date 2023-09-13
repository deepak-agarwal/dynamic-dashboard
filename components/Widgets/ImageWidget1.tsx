import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const ImageWidget1 = ({}) => {
  return (
    <div className='line-graph'>
      <LineChart width={400} height={300} data={generateLineChartData(23)}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='value'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  )
}

export default ImageWidget1

const generateLineChartData = (numPoints: number) => {
  const data = []

  for (let i = 0; i < numPoints; i++) {
    data.push({
      name: `Data Point ${i + 1}`,
      value: Math.random() * 100 // Generating random data values between 0 and 100
    })
  }

  return data
}
