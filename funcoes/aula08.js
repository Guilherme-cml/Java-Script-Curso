//Factory functions

function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function(assunto){
            return `${this.nome} esta falando sobre ${assunto}`
        },
    altura,
    peso,
//getter
    get imc(){
        const indice = this.peso / (this.altura * this.altura)
        return indice.toFixed(2);
    }
    }
    
}

 

const pessoa1 = criaPessoa('Gui', 'Caetano', 1.76, 67.5);
console.log(pessoa1.fala('JS'))

console.log(pessoa1.imc) //getter console.log(pessoa1.imc())

pessoa1.nomeCompleto = 'Gui Caetano Machado';
console.log(pessoa1.nomeCompleto)