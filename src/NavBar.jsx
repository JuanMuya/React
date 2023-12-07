import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <div>

            <Flex alignItems="center" bg='yellow.400'>
                <Box p='4' >
                    Inicio
                </Box>

                <Spacer />

                <Menu>
                    <MenuButton >
                        Clothes
                    </MenuButton>
                    <MenuList>
                        <MenuItem> Man</MenuItem>
                        <MenuItem> Woman </MenuItem>
                        <MenuItem>Kids</MenuItem>

                    </MenuList>
                </Menu>

                <Spacer />

                <Box p='4' >
                    Fotos
                </Box>

                <Spacer />

                <Box p='4' >
                    Contacto
                </Box>

                <Spacer />

                <Box p='4' bg='green.500'>
                    <CartWidget />
                </Box>
            </Flex>



            <CartWidget />

        </div>
    )
}

export default Navbar