class Telefone {
    constructor(nome){
        this.nome = nome,
        this.ligado = false}

        ligar(){
            if(this.ligado == true) return 'Telefone ja ligado'
            this.ligado = true
        }

        desligar(){
            if(this.ligado == false) console.log( 'Telefone ja desligado')
            this.ligado = false 
        }
       
    };
    
const celular = new Telefone('Samsung')
celular.desligar()
console.log(celular)


//para uma classe herdar da outra suas propiedades usamos a palavra extends
class Smartphone extends Telefone{
    constructor(nome, cor){
        super(nome)
        this.cor = cor
    }
}