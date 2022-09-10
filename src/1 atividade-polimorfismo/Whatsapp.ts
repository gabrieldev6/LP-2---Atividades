import Enviar from './enviar'
import Usuario from './Usuario'

export default class Whatsapp implements Enviar {

    public execute( user: Usuario): void {

        console.log("e-mail enviado com sucesso")
        console.log(`usuario: ${user.Nome()}`)
        console.log(`e-mail: ${user.Email()}`)

    }
}