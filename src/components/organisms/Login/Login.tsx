import { FormEvent, useEffect, useRef } from "react"
import { AppButton } from "../../atoms/AppButton/AppButton"
import AppInput  from "../../atoms/AppInput/AppInput"
import { useAuth } from "../../../hooks/useAuth";


export default function LoginForm() {
  const {loginAuth} = useAuth()
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const sendData = (e: FormEvent) => {
    e.preventDefault()
    console.log({
      email:emailRef.current?.value, 
      passwrod: passwordRef.current?.value
    })
    loginAuth('1q231sr3')
  }
  useEffect(() => {
    // Accede al elemento DOM cuando el componente se monta
    if (emailRef.current) {
      emailRef.current.focus(); // Enfoca el input automáticamente
    }
  }, []);
  return (
    <form onSubmit={sendData} className="w-full max-w-sm mx-auto flex flex-col gap-5">
      <div>
        <div className="text-2xl font-bold">Raffle Admin</div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <AppInput type="email" placeholder="your@email.com" ref={emailRef}/>
        </div>
        <div className="space-y-2">
          <label htmlFor="password">Password</label>
          <AppInput type="password" placeholder="Ingresa password" ref={passwordRef}/>
        </div>
      </div>
      <div>
        <AppButton title="Sign In" className="w-full" />
      </div>
    </form>
  )
}
