import { forwardRef } from 'react';

interface Props {
  type:string
  label?: string
  placeholder?:string
  onChange?: (e:string) => void
  ref: (e:string) => void
}
const AppInput = forwardRef<HTMLInputElement, Props>(({type = 'text',label, placeholder, onChange}, ref) =>{
  return <div>
    <label data-testid='labelData' htmlFor={label}>{label}</label>
    <input data-testid='input' ref={ref} type={type} placeholder={placeholder} id={label}  className="p-3 border w-full" onChange={onChange && ((e)=>{onChange(e.target.value)})}/>
  </div>;
})

export default AppInput