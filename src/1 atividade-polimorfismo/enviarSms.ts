import Usuario from './Usuario'
import Enviar from './enviar'
export default class EnviarSms implements Enviar {
    
    public execute(user: Usuario) :void {
        console.log("e-mail enviado com sucesso")
        console.log(`usuario: ${user.nome()}`)
        console.log(`e-mail: ${user.email()}`)
    }
}