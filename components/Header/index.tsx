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
  MenuIcon
} from '@gluestack-ui/themed'

const Header = () => {
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
        <Icon name='Menu' as={MenuIcon} />
        <Text bold size='md' color='purple'>
          Dynamix
        </Text>
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
          <InputIcon as={SearchIcon} />
        </Input>
      </Box>
      <HStack space='md'>
        <Box>
          <Icon as={BellIcon} name='Bell Icon' size='md' />
        </Box>
        <Box>
          <Icon as={Avatar} name='Avatar' size='md' />
        </Box>
      </HStack>
    </Box>
  )
}

export default Header
