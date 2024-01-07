import React from 'react'
import { Card, Text, Stack, Divider, ButtonGroup, Button, CardBody, Heading, CardFooter } from '@chakra-ui/react'
import ItemCaunt from './ItemCaunt'

const Item = ({ titulo, descripcion, precio }) => {
    return (
        <Card maxW='sm'>
            <CardBody>

                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{titulo}</Heading>
                    <Text>
                        {descripcion}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        ${precio}
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

export default Item