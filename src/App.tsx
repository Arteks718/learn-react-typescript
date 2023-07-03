import { useState } from 'react'
import Product from './components/Product'
import { useProducts } from './hooks/products'
import Loader from './components/Loader'
import Error from './components/Error'
import Modal from './components/Modal'
import CreateProduct from './components/CreateProduct'
import { IProduct } from './models'

function App() {
  const { products, loading, error, addProduct } = useProducts()
  const [modal, setModal] = useState(true);

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      { loading && <Loader />}
      { products.map(product  => <Product product={product} key={product.id}/> ) }
      { error && <Error error={error} /> }

      { modal && <Modal title="Create new product" onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}

      { !modal && <button className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-5 py-3" onClick={() => setModal(true)}>+</button>}
    </div>
  )
}

export default App;
