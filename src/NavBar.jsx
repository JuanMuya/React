import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <Flex alignItems="center" bg='yellow.400'>
                <Link to={"/"}>
                    <Box p='4' >
                        Inicio
                    </Box>
                </Link >
                <Spacer />

                <Menu>

                    <MenuButton >
                        Indumentaria
                    </MenuButton>

                    <MenuList>
                        <Link to={'/categoria/A'}>
                            <MenuItem> Hombre</MenuItem>
                        </Link>
                        <Link to={'/categoria/B'}>
                            <MenuItem> Mujer </MenuItem>
                        </Link>
                        <Link to={'/categoria/C'}>
                            <MenuItem>Niños</MenuItem>
                        </Link>

                    </MenuList>
                </Menu>

                <Spacer />
                <Link to={"/about"}>
                    <Box p='4' >
                        Fotos
                    </Box>
                </Link>

                <Spacer />
                <Link to={"/contact"}>
                    <Box p='4' >
                        Contacto
                    </Box>
                </Link>

                <Spacer />
                <Link className='seeCarrito' to={"/cart"}>
                    <Box p='4' bg='green.500'>
                        <CartWidget />
                    </Box>
                </Link>
            </Flex>
        </div>
    )
}

export default Navbar