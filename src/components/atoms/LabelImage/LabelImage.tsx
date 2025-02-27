interface Props{
    label:string
    img: string
}
export const LabelImage = ({label, img}:Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
        <img src={img} alt={label} data-testid="image"/>
        <label className="text-center font-bold text-[32px]" data-test="label">{label}</label>
    </div>
  )
}
