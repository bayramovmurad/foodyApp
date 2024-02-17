import React from 'react'

interface TitleTypes {
    value: string,
    size: string,
    weight: number,
    color: string,
    mwidth: string,
}

const Title = ({ value , size , weight , color , mwidth }:TitleTypes) => {
  return (
    <p style={{fontSize:size,maxWidth:mwidth,color:color,fontWeight: weight}}>
        {
            value
        }
    </p>
  )
}

export default Title