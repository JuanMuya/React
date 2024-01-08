import React from 'react'
import { Card, CardHeader, Heading, CardBody, Text, CardFooter, Button } from '@chakra-ui/react'

const DataPresentation = ({ title, description, price }) => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <Heading size='md'> {title} </Heading>
                </CardHeader>
                <CardBody>
                    <Text> {description} </Text>
                </CardBody>
                <CardFooter>
                    <Button> {price} </Button>
                </CardFooter>
            </Card>

        </div>
    )
}

export default DataPresentation