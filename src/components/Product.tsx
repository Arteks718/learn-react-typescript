import {useState} from 'react'
import {IProduct} from '../models'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)
  const btnClassName = details ? 'bg-blue-400' : 'bg-yellow-400'

  const btnClasses:string[] = ['py-2 px-4 border', btnClassName]

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      {product.title}
      <img src={product.image} className="w-1/5" alt={product.title} />
      <p> {product.title}</p>
      <p className='font-bold'>{product.price}</p>
      <button className={btnClasses.join(' ')} onClick={() => setDetails(!details)}>{details ? "Hide Details" : "Show Details"}</button>
      {details && <div>
        <p>{product.description}</p>
        <p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
      </div>}
    </div>
  )
}