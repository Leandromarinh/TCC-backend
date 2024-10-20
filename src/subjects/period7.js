const period7 = {
  period: "7",
  subjects: [
    {
      codigo: "EEL615",
      nome: "Eletrônica IV",
      ementa:
        "Estagios de saida e amplificadores de potencia. Fontes e tiristores. Conversores DC/DC. Amplificadores sintonizados. Circuitos de AM/FM. PLL.",
      credito: 5.0,
      prof: "Barúqui",
      sala: "H213",
      preReq: "EEL515 (P)",
      hora: {
        hora1: { dia: "TER", inicio: "13:00", fim: "15:00" },
        hora2: { dia: "QUI", inicio: "13:00", fim: "15:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 90,
    },
    {
      codigo: "EEL711",
      nome: "Processamento de Sinais",
      ementa:
        "Conceito de filtragem. Aproximacao de resposta em frequencia. Projeto de filtros passivos e ativos. Escalonamento de frequencia e impedancia. Realizacao. Filtros digitais: FIR, IIR. Projeto de filtros digitais FIR e IIR.",
      credito: 5.0,
      prof: "Ricardo Merched",
      sala: "H213",
      preReq: "EEL525 (P), EEL555 (P)",
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
      codigo: "EEL740",
      nome: "Comunicações II",
      ementa:
        "Codificação Correlativa; Receptores Lineares ótimos; Detecção e Estimação; Modulação Digital Coerente (BPSK, QPSK, QAM, CAP, FSK, MSK); Modulação Digital Não Coerente (FSK, DPSK); Modulação Digital Multi-Canal (DMT, OFDM); Limites Fundamentais de Desempenho: entropia, Codificação de Fonte, Capacidade do Canal; Sincronização de portadoras e de símbolos; Códigos Corretores de Erro: Códigos por blocos, códigos convolucionais, códigos turbo e LDPC.",
      credito: 5.0,
      prof: "Eduardo Silva",
      sala: "H213",
      preReq: "EEL630 (P), EEL640 (P)",
      hora: {
        hora1: { dia: "SEG", inicio: "15:00", fim: "17:00" },
        hora2: { dia: "QUA", inicio: "15:00", fim: "18:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 75,
    },
    {
      codigo: "EEL760",
      nome: "Controle Linear II-A",
      ementa:
        "Linearização e modelagem de sistemas no espaço de estados. Realimentação de estados. Matriz de transferência de estados: propriedades. Regulação e posicionamento de auto valores. Rastreamento de um sinal de referência e rejeição de perturbações. Observador de estado. Combinação servidor - controlador. Introdução ao controle ótimo linear quadrático. Controle digital e controle analógico. Modelos discretos de sistemas amostrados. Entrada-saída e no espaço de estados. Análise de sistemas de controle digital. Algoritmos de controle digital: síntese por emulação, pelo método do lugar das raízes, por métodos polinomiais e por métodos de espaço de estados. Aspectos práticos de sistemas de controle analógicos e digitais.",
      credito: 5.0,
      prof: "Alessandro Jacoud",
      sala: "H213",
      preReq: "EEL660 (P)",
      hora: {
        hora1: { dia: "SEG", inicio: "12:00", fim: "15:00" },
        hora2: { dia: "SEX", inicio: "15:00", fim: "17:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 75,
    },
    {
      codigo: "EEL770",
      nome: "Sistemas Operacionais",
      ementa:
        "Estrutura dos sistemas operacionais. Gerenciamento de processos. Sincronizacao e comunicacoes entre processos. Deadlock. Gerenciamento de memoria. Memoria virtual. Memoria secundaria. Sistemas de arquivos. Entrada e saida. Sistemas distribuidos. Exemplos de sistemas operacionais.",
      credito: 5.0,
      prof: "Rodrigo Couto",
      sala: "H213",
      preReq: "",
      hora: {
        hora1: { dia: "TER", inicio: "15:00", fim: "18:00" },
        hora2: { dia: "QUI", inicio: "15:00", fim: "17:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 75,
    },
    {
      codigo: "EELX00",
      nome: "Projeto Integrado",
      ementa:
        "Projeto de caracteristica multidisciplinar, realizado em grupo, com a apresentação dos resultados práticos e documentação perante uma banca de professores.",
      credito: 1.0,
      prof: "Casé",
      sala: "H218",
      preReq: "",
      hora: {
        hora1: { dia: "QUA", inicio: "10:00", fim: "12:00" },
        hora2: { dia: "", inicio: "", fim: "" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 30,
    },
  ],
};

module.exports = period7;
