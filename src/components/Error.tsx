import React from 'react'
interface IErrorMessageProps {
  error: string;
}

export default function Error({error}: IErrorMessageProps) {
  return (
    <p className="text-center text-red-600">{ error }</p>
  )
}
