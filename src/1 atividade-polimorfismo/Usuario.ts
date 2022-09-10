export default class Usuario {
    private nome: String
    private email: String
    private telefone: String

    private constructor(nome:String, email:String, telefone:String){
        this.nome = nome
        this.email = email
        this.telefone = telefone
        
        this.validate()
    }
    
    public static Usuario(nome:String, email:String, telefone:String){
        return new Usuario(nome, email, telefone)
    }
    
    public update(nome:String, email:String, telefone:String){
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }
    
    private isEmpty(val: Record<string, unknown> | null | undefined| String){
        return val == null || !(Object.keys(val) || val).length;
    }

    private validate(): void{
        //verifica se nome é vazio
        if(this.isEmpty(this.nome)) console.log("nome é obrigatorio")
            
        //verifica se email é vazio
        if(this.isEmpty(this.email)) console.log("email é obrigatorio")
            
        //verifica se telefone é vazio
        if(this.isEmpty(this.telefone)) console.log("telefone é obrigatorio")
            
        
    }
    
    //pega as variaveis
    public Nome(): String {
        return this.nome
    }
    public Email(): String {
        return this.nome
    }
    public Telefone(): String {
        return this.nome
    }

}