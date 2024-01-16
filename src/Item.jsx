import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Stack, Divider, ButtonGroup, Button, CardBody, Heading, CardFooter } from '@chakra-ui/react'


const Item = ({ titulo, id }) => {
    return (
        <Card maxW='sm'>
            <CardBody>

                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{titulo}</Heading>

                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button>
                        <Link to={`/producto/${id}`}>
                            Ver Detalle
                        </Link>
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Item