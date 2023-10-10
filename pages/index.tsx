import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import { Box, Divider, Text } from '@gluestack-ui/themed'
import Sidebar from '@/components/Sidebar'
import { Canvas } from '@/components/Canvas'
import Header from '@/components/Header'
import { NewDashboard } from '@/components/NewDashboard'
import { FloatingMenu } from '@/components/FloatingMenu'
import { useState } from 'react'
import { LandingDashboard } from '@/components/NewDashboard/LandingDashboard'

const Home: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showDropCanvas, setShowDropCanvas] = useState(false)
  const [widgets, setWidgets] = useState([])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const showDropCanvasFn = () => {
    setShowDropCanvas(true)
  }

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Text m='$2' color='black'>
        Dashboard
      </Text>
      <Box display='flex' flexDirection='row'>
        {sidebarOpen && (
          <>
            <Box bg='#525252'>
              <FloatingMenu showDropCanvasFn={showDropCanvasFn} />
            </Box>
            <Box
              bg='$backgroundDark100'
              p='$5'
              m='$2'
              w={'100%'}
              h={'88vh'}
              rounded={'$md'}
              flex={'auto'}
              flexGrow={1}
            >
              {showDropCanvas ? (
                <Canvas widgets={widgets} setWidgets={setWidgets} />
              ) : (
                <LandingDashboard />
              )}
            </Box>
          </>
        )}
        {widgets.length == 0 && !sidebarOpen && (
          <Box
            bg='$backgroundDark100'
            p='$5'
            m='$2'
            w={'100%'}
            rounded={'$md'}
            flex={'auto'}
            flexGrow={1}
            h={'88vh'}
          >
            <NewDashboard toggleSidebar={toggleSidebar} />
          </Box>
        )}
      </Box>
    </>
  )
}

export default Home
