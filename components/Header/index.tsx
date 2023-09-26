// a component that renders the header of the app with logo on left side a searchbar on middle and notifications and profile on right side using gluestack ui components
// this component is used in the main app component

import React from 'react'
import {
  Box,
  HStack,
  Icon,
  Input,
  InputField,
  Menu,
  SearchIcon,
  Text,
  InputIcon,
  Avatar,
  BellIcon,
  MenuIcon,
  Button,
  ButtonIcon
} from '@gluestack-ui/themed'

const Header = ({ toggleSidebar }) => {
  return (
    <Box
      bg='$backgroundDark100'
      p='$5'
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      margin={'$2'}
      borderRadius={'$md'}
    >
      <HStack space='md'>
        {/* <Button size='md'> */}
        <Box
          justifyContent='center'
          alignContent='center'
          bgColor='#F1EEFF'
          p='0 8px 0 8px'
          borderRadius='5px'
        >
          <ButtonIcon size={'md'} as={MenuIcon} onClick={toggleSidebar} />
        </Box>
        {/* </Button> */}
        <Box justifyContent='center' alignContent='center'>
          <Text bold size='md' color='purple'>
            Dynamix
          </Text>
        </Box>
      </HStack>
      <Box>
        <Input
          variant='outline'
          size='md'
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder='Search' />
          <InputIcon as={SearchIcon} m={'$2'} />
        </Input>
      </Box>
      <HStack space='md'>
        <Box bgColor='#F1EEFF' p='0 8px 0 8px' borderRadius='$md'>
          <Icon as={BellIcon} name='Bell Icon' size='md' m={'$4'} />
        </Box>
        <Box>
          <Icon as={Avatar} name='Avatar' size='md' />
        </Box>
      </HStack>
    </Box>
  )
}

export default Header
