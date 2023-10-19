import Button from "./Button";
import InputText from "./InputText";

export default function Login(props) {
   //não recebe nada

   //retorna um form com dois InputText de texto e um botão entrar

   //paragrafo "ainda não tem conta?"
   // botao inscrever-se


   return <>
   <form action="submit">
      <InputText name="Email"/>
      <InputText name="Password"/>
      <Button name="Entrar"/>
   </form>
   </>
    
}