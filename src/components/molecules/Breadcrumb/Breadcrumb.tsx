import { useNavigate } from "react-router-dom"
import { AppButton } from "../../atoms/AppButton/AppButton"
import {ArrowLeft} from 'lucide-react'
interface Props {
    buttonTitle?: string
    title:string
    onClick?:()=>void,
    back?: boolean
}

export const Breadcrumb = ({title, buttonTitle, onClick, back}:Props) => {
  const navigate = useNavigate()

  return (
    <header className='flex justify-between mb-5 bg-primary p-5 rounded text-white'>
        <div className="flex items-center gap-3">
          {back && <button  className="bg-white w-[42px] h-[42px] flex justify-center items-center rounded-[50px]" onClick={()=> navigate(-1)}><ArrowLeft className="text-dark " size={30}/></button>}
          <h1 className='text-4xl font bold'>{title}</h1>
        </div>
        {buttonTitle && <AppButton title={buttonTitle} onClick={onClick}/>}
    </header>
  )
}
