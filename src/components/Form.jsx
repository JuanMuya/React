import React, { useState } from 'react'
import { Input, Button, Text } from '@chakra-ui/react'
import Swal from 'sweetalert2'


const Form = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [purchaseId, setPurchaseId] = useState("dkjns8237")

    const handleSubmit = (e) => {
        e.preventDefault()
        Swal.fire({
            title: "Mensaje Aprobado",
            text: "Su mensaje procederá a enviarse, de acuerdo?",
            icon: "question"
        });

    }


    return (
        <div>
            <form action='' onSubmit={handleSubmit}>

                <Input placeholder="Nombre Completo" onChange={(e) => setNombre(e.target.value)} />
                <Input placeholder="Correo electrónico" type="email" onChange={(e) => setEmail(e.target.value)} />

                <Button colorScheme='red' type="submit">Enviar</Button>

            </form>

            <Text>
                {`El id de su compra es: ${purchaseId}`}
            </Text>

        </div>
    )
}

export default Form
