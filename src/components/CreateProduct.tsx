import React, { useState } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import { IProduct } from '../models'
import Error from './Error'

const productData: IProduct = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10
  }
}

interface IField {
  type: string,
  className: string
}

interface ICreateProductProps {
  onCreate: (product:IProduct) => void
}

export default function CreateProduct({ onCreate }: ICreateProductProps) {
  const [error, setError] = useState('');
  const fieldObj:IField = {
    type: 'text',
    className: 'border py-2 px-4 my-2 w-full outline-0'
  };

  return (
    <Formik
      initialValues={{ title: '', price: '', description:'', category:'' }}
      onSubmit={async (values, { setSubmitting }) => {
        if(values.title.trim().length === 0) {
          setError('Please enter valid info.')
          return
        }

        setError('');
        await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
          .then(res => {
            onCreate(res.data);
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }}
    >
      {({errors, touched, isSubmitting, values}) => (
        <Form>
          <Field {...fieldObj} name="title" placeholder="Enter product title..."/>
          {!values.title && <Error error={error} />}
          <Field {...fieldObj} name="price" placeholder="Enter product price..."/>
          {!values.price && <Error error={error} />}
          <Field {...fieldObj} name="description" placeholder="Enter product description..."/>
          {!values.description && <Error error={error} />}
          <Field {...fieldObj} name="category" placeholder="Enter product category..."/>
          {!values.category && <Error error={error} />}

          <button type="submit" className="block mx-auto my-0 py-2 px-4 border bg-yellow-400 hover:text-blue-600" disabled={isSubmitting}>Create</button>
        </Form>
      )}
    </Formik>
  )
}