import Usuario from './Usuario'
import Enviar from './enviar'
export default class CadastrarUsuario {

    public execute( user:Usuario,  enviar:Enviar):void  {
        console.log("usuario salvo com sucesso")
        enviar.execute(user)
    }
}
