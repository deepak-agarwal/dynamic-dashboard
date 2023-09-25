// a component withbutton in between and a text
import React from 'react'
import { AddIcon, Box, Button, ButtonIcon, Text } from '@gluestack-ui/themed'

type Props = {
  toggleSidebar: () => void
}

export const NewDashboard: React.FC<Props> = ({ toggleSidebar }) => {
  return (
    <>
      <Box
        height={75}
        justifyContent='center'
        alignContent='center'
        flexWrap='wrap'
      >
        <Button bgColor='#6F64F5' w={300} onPress={toggleSidebar}>
          <ButtonIcon size={'md'} as={AddIcon} />
          Create your first dashboard
        </Button>
      </Box>
    </>
  )
}
