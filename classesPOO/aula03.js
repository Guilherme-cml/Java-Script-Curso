class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }
    
    static Trocapilha(){
      // metodo refernte a classe, funciona sendo chamado pela classe  
    }

}