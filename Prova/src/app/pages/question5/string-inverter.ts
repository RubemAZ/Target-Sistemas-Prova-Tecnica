class InversorDeString {
  private texto: string;

  constructor(texto: string) {
    this.texto = texto;
  }

  // Método para inverter a string sem usar funções prontas
  public inverter(): string {
    let textoInvertido = "";
    for (let i = this.texto.length - 1; i >= 0; i--) {
      textoInvertido += this.texto[i];
    }
    return textoInvertido;
  }
}

// Exemplo de uso
const textoParaInverter = "Exemplo de string a ser invertida."; // String pode ser alterada conforme necessário
const inversor = new InversorDeString(textoParaInverter);

console.log("Texto original:", textoParaInverter);
console.log("Texto invertido:", inversor.inverter());
