import React, { useState } from 'react'
import { Input, Button, Text } from '@chakra-ui/react'
import Swal from 'sweetalert2'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../context/ShoppingCartContext'


const Form = () => {



    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando")
        Swal.fire({
            title: "Mensaje Aprobado",
            text: "Su mensaje procederá a enviarse, de acuerdo?",
            icon: "question"
        });


        addDoc(ordersCollection, order).then(({ id }) =>
            setOrderId(id))
    }


    const order = {
        cliente: { nombre, email },
        //   items: { CartContext },

    }

    const ordersCollection = collection(db, "orden")




    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} />
                <input type="email" placeholder='Correo' onChange={(e) => setEmail(e.target.value)} value={email} />
                <button type="submit">Enviar </button>
            </form>
            <p>{orderId} </p>
        </div>
    )


}



{/* const Form = () => {

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
}   */}

export default Form
