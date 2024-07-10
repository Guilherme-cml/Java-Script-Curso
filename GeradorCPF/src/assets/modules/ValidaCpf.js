export default class ValidaCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }
 
    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo

    }
    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1= ValidaCpf.criaDigito(cpfParcial);
        const digito2 = ValidaCpf.criaDigito(cpfParcial + digito1);
        this.novoCpf = cpfParcial + digito1 + digito2
    }
     static criaDigito(cpfParcial){
        // por não usar nenhum this, esse método pode ser estatico
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for (let stringNumerica of cpfParcial){
            total += reverso * Number(stringNumerica);
            reverso--; }
        
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }
    valida(){
        if(!this.cpfLimpo) return false;
        if (this.cpfLimpo.length !== 11) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.sequencia()) return false;
        this.geraNovoCpf();

        return this.novoCpf === this.cpfLimpo;

    }
}

console.log('chg')