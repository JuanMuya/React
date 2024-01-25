import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore, } from "firebase/firestore"

const Collection = () => {
  const [products, setProducts] = useState([])
  console.log(products)

  useEffect(() => {

    const db = getFirestore()

    const itemsCollection = collection(db, "Ropa")

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      console.log(docs)
    })


  }, [])

  return (
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
}

export default Collection