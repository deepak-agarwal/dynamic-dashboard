import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import { Box, Divider, Text } from '@gluestack-ui/themed'
import Sidebar from '@/components/Sidebar'
import { Canvas } from '@/components/Canvas'

const Home: NextPage = () => {
  return (
    <Box display='flex' flexDirection='row'>
      <Box bg='$warmGray700' p='$5' sx={{ h: '100vh', w: '10vw' }}>
        <Sidebar />
      </Box>
      <Divider orientation='vertical' />
      <Box bg='$backgroundDark100' p='$5' sx={{ h: '100vh', w: '100vw' }}>
        <Text>Content</Text>
        <Canvas />
      </Box>
    </Box>
  )
}

export default Home
