interface LabelTypes {
  value: string,
  forId: string
}

const Label = ({ value , forId }:LabelTypes) => {
  return (
    <label className="text-[#4F4F4F] text-[18px] font-semibold mb-1" htmlFor={forId}>
        {
            value
        }
    </label>
  )
}

export default Label