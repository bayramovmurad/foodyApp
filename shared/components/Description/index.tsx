interface DescriptionTypes {
  value: string,
  size: string,
  weight: number,
  color: string,
  mwidth: string,
}

const Description = ({ value , mwidth , size , weight , color }:DescriptionTypes) => {
  return (
    <p style={{ maxWidth:mwidth , color: color , fontSize: size , fontWeight: weight }}>
        {
          value
        }
    </p>
  )
}

export default Description