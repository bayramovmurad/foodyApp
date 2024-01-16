import React from 'react'

interface titleTypes {
    value: string
}

const FormTitle = ({ value }: titleTypes) => {
  return (
    <p className="text-[#4F4F4F] text-[30px] font-semibold">
        {
            value
        }
    </p>
  )
}

export default FormTitle