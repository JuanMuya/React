import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <div>

            <Flex>
                <Box p='4' bg='red.400'>
                    MyEcommerce
                </Box>
                <Spacer />

                <Menu>
                    <MenuButton >
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Categoria 1</MenuItem>
                        <MenuItem>Categoria 2</MenuItem>
                        <MenuItem>Categoria 3</MenuItem>

                    </MenuList>
                </Menu>

                <Spacer />

                <Box p='4' bg='green.400'>
                    <CartWidget />
                </Box>
            </Flex>



            <CartWidget />

        </div>
    )
}

export default Navbar