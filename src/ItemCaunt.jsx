import { useState } from 'react'
import { Button } from '@chakra-ui/react'

const ItemCaunt = () => {


    const [contador, setContador] = useState(0)


    return (
        <div>
            <Button colorScheme='teal' size='xs' onClick={() => setContador(contador + 1)}>
                +
            </Button>
            <Button>
                Agregar al Carrito {contador}
            </Button>

            <Button colorScheme='teal' size='xs' onClick={() => setContador(contador - 1)}>
                -
            </Button>

        </div>
    )
}

export default ItemCaunt