import React from 'react'
import { Card, Text, Stack, Divider, ButtonGroup, Button, CardBody, Heading, CardFooter } from '@chakra-ui/react'
import ItemCaunt from '../ItemCaunt'
import { useParams } from 'react-router-dom'


const ItemDetail = ({ producto }) => {

    const { id } = useParams()




    return (
        <Card maxW='sm'>
            <CardBody>

                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{producto.titulo}</Heading>
                    <Text>
                        {producto.descripcion}
                    </Text>
                    <Text>
                        ${producto.precio}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <ItemCaunt />
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default ItemDetail