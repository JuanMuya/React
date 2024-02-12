import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore, } from "firebase/firestore"
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

export const Collection = () => {
  const { categoriaId } = useParams()
  const [productos, setProducts] = useState([])
  console.log(productos)

  useEffect(() => {

    const db = getFirestore()

    const itemsCollection = collection(db, "Ropa")

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      console.log(docs)
      setProducts(docs)
    })


  }, [])

  let productosFiltrados = productos.filter((producto) => producto.categoria == categoriaId)


  return (
    <div>
      {
        categoriaId ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos} />

      }
    </div>

  )

}
  /*return (
    <div>
      {
        products.map((p) => (
          <>
            <h2>{p.nombre} </h2>
            <h2>{p.precio} </h2>
          </>
        ))
      }
    </div>
  )
}*/

export default Collection