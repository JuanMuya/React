import { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from 'ItemDetailContainer'

const Document = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const bd = getFirestore()

        const oneItem = doc(db, "Ropa", `${id}`)
        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const doc = snapshot.data()
                setProduct(doc)
            }
        })

    }, [])


    return (
        <div>
            Producto:{product.nombre}
            Precio:: {product.precio}


        </div>
    )
}

export default Document