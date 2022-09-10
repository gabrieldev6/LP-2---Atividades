import Enviar from './enviar'
import Usuario from './Usuario'

export default class EnviarEmail implements Enviar {
    public execute(user: Usuario) :void {
        console.log("e-mail enviado com sucesso")
        console.log(`usuario: ${user.nome()}`)
        console.log(`e-mail: ${user.email()}`)
    }
}