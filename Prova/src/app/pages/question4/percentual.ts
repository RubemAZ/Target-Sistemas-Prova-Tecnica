interface FaturamentoEstado {
  estado: string;
  valor: number;
}

class FaturamentoMensal {
  private dados: FaturamentoEstado[];

  constructor(dados: FaturamentoEstado[]) {
    this.dados = dados;
  }

  // Método para calcular o faturamento total
  private calcularFaturamentoTotal(): number {
    return this.dados.reduce((total, item) => total + item.valor, 0);
  }

  // Método para calcular o percentual de cada estado
  public calcularPercentuais(): { estado: string; percentual: number }[] {
    const total = this.calcularFaturamentoTotal();
    return this.dados.map(item => ({
      estado: item.estado,
      percentual: parseFloat(((item.valor / total) * 100).toFixed(2))
    }));
  }
}

// Dados fornecidos
const faturamentoPorEstado: FaturamentoEstado[] = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 }
];

// Criando a instância da classe e exibindo os percentuais
const faturamento = new FaturamentoMensal(faturamentoPorEstado);
const percentuais = faturamento.calcularPercentuais();

percentuais.forEach(item => {
  console.log(`${item.estado}: ${item.percentual}%`);
});
