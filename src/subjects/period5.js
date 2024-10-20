const period5 = {
  period: "5",
  subjects: [
    {
      codigo: "EEL410",
      nome: "Eletrônica II",
      ementa:
        "Introdução a simuladores. O transistor bipolar de junção. Transistores de efeito de campo. Circuitos digitais MOS. Circuitos digitais bipolares. Amplificadores diferenciais e de múltiplos estágios.",
      credito: 5.0,
      prof: "Carlos Teodósio",
      sala: "H211",
      preReq: "EEL315 (P), EEL420 (P)",
      hora: {
        hora1: { dia: "TER", inicio: "15:00", fim: "17:00" },
        hora2: { dia: "QUI", inicio: "15:00", fim: "17:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 90,
    },
    {
      codigo: "EEL525",
      nome: "Circuitos Elétricos II",
      ementa:
        "Circuitos dinâmicos generalizados. Análise modal numérica no domínio do tempo. Circuitos lineares invariantes no tempo. Funções de rede e estabilidade. Análise geral de circuitos. Redes de duas ou mais portas e reciprocidade.",
      credito: 5.0,
      prof: "Fernanda",
      sala: "H211",
      preReq: "EEL420 (P)",
      hora: {
        hora1: { dia: "SEG", inicio: "15:00", fim: "18:00" },
        hora2: { dia: "SEX", inicio: "15:00", fim: "17:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 75,
    },
    {
      codigo: "EEL535",
      nome: "Teoria Eletromagnética II",
      ementa:
        "Ondas eletromagnéticas. Vetor de Poynting. Polarização, reflexão e refração de ondas planas. Linhas de transmissão (cabo coaxial, linha paralela, guia de onda, fibra ótica). Fundamentos de antenas e propagação",
      credito: 5.0,
      prof: "Natanael",
      sala: "H211",
      preReq: "EEL330 (P)",
      hora: {
        hora1: { dia: "SEG", inicio: "13:00", fim: "15:00" },
        hora2: { dia: "QUA", inicio: "15:00", fim: "18:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 75,
    },
    {
      codigo: "EEL555",
      nome: "Sistemas Lineares II",
      ementa:
        "Sistemas lineares discretos no tempo: equacoes a diferencas, Transformada Z; analises nos dominios do tempo e da frequencia: modos naturais e estabilidade; caracteristicas de resposta de modelos tipicos; t. Fourier e dft. Representacao de sistemas continuos e discretos no tempo no espaco de estados: equacoes de estado; autovalores e estabilidade; autovetores e trajetorias de estado; controlabilidade e observabilidade; realizacao de funcoes de transferencia. Simulacao de sistemas: solucao numerica de equacoes diferenciais; metodos de integracao. Limitacoes da analise linear de sistemas.",
      credito: 5.0,
      prof: "Mariane",
      sala: "H211",
      preReq: "EEL350 (P",
      hora: {
        hora1: { dia: "QUA", inicio: "13:00", fim: "15:00" },
        hora2: { dia: "SEX", inicio: "12:00", fim: "15:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 75,
    },
    {
      codigo: "EEL580",
      nome: "Arquitetura de Computadores",
      ementa:
        "Conceitos basicos. Abordagem estrutural no estudo dos computadores. Maquinas Cisc e Risc. Arquitetura de uma unidade central de processamento. Registradores, barramentos, pipelines, caches. Linguagem de maquina e linguagem assembly. Arquitetura de memorias. Dispositivos de entrada e saida. Barramentos internos e externos. Computacao paralela. Comunicacao e sincronizacao entre computadores. Computadores tolerantes a falhas.",
      credito: 5.0,
      prof: "Diego Dutra",
      sala: "H211",
      preReq: "",
      hora: {
        hora1: { dia: "TER", inicio: "13:00", fim: "15:00" },
        hora2: { dia: "QUI", inicio: "12:00", fim: "15:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 75,
    },
  ],
};

module.exports = period5;
