const period6 = {
  period: "6",
  subjects: [
    {
      codigo: "EEL515",
      nome: "Eletrônica III",
      ementa:
        "Resposta em frequencia. Realimentacao. Amplificadores operacionais. Osciladores.",
      credito: 5.0,
      prof: "Carlos Teodósio",
      sala: "H211",
      preReq: "EEL410 (P)",
      hora: {
        hora1: { dia: "TER", inicio: "08:00", fim: "10:00" },
        hora2: { dia: "QUI", inicio: "08:00", fim: "10:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 90,
    },
    {
      codigo: "EEL630",
      nome: "Modelos Probabilísticos em Eng.",
      ementa:
        "Experiencia aleatoria: espaco amostra, axiomas da probabilidade. Probabilidades condicionais. Variaveis aleatorias. Funcao de distribuicao. Variaveis aleatorias discretas e continuas. Funcao densidade de probabilidade. Funcao de v. A. Distribuicoes conjuntas. Valores esperados. Funcoes caracteristicas e geradoras de momentos. Sequenciais de variaveis aleatorias. Processos estocasticos: definicoes. Processos estacionarios e ergodicos. O processo de poisson. Densidade espectral de potencia. Resposta de sistemas lineares a sinais aleatorios. Cadeias de markov.",
      credito: 4.0,
      prof: "Weiler Finamore",
      sala: "H211",
      preReq: "EEL350 (P), EEL356 (P)",
      hora: {
        hora1: { dia: "QUA", inicio: "10:00", fim: "12:00" },
        hora2: { dia: "SEX", inicio: "10:00", fim: "12:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 60,
    },
    {
      codigo: "EEL640",
      nome: "Comunicações I",
      ementa:
        "Conceitos fundamentais de sistemas de comunicações (transmissor, canal, receptor, modulação); Modulações analógicas em amplitude (DSB-SC, DSB-LC (AM), SSB, VSB); Modulações analógicas em ângulo (FM e PM); Receptor superheteródimo; Modulações analógicas com portadora trem-de-pulsos (PAM, PWM e PPM); Conceitos básicos de sincronismo (circuitos PLL); Amostragem e Quantização; Codificação de sinais digitais em banda básica (NRZ polar, NRZ unipolar, Manchster etc.); Codificações PCM, DPCM, ADPCM, modulação delta, modulação sigma-delta; Filtro casado",
      credito: 5.0,
      prof: "Gelson",
      sala: "H211",
      preReq: "	EEL630 (C)",
      hora: {
        hora1: { dia: "SEG", inicio: "10:00", fim: "13:00" },
        hora2: { dia: "QUA", inicio: "08:00", fim: "10:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 75,
    },
    {
      codigo: "EEL660",
      nome: "Controle Linear I A",
      ementa:
        "Controle em malha aberta e controle em malha fechada. Composicao de um sistema de controle. Analise dos efeitos de realimentacao. Algebra de blocos. Estabilidade: criterios de Routh-Hurwitz e criterios frequenciais de Nyquist e Bode. Rastreamento de trajetorias e rejeicao de perturbacoes. Resposta transitoria. Metodo do lugar das raizes. Controladores PID: aspectos praticos e sintonia. Projeto de controladores: metodos frequenciais e metodo do lugar das raizes.",
      credito: 5.0,
      prof: "Heraldo",
      sala: "H211",
      preReq: "EEL350 (P)",
      hora: {
        hora1: { dia: "TER", inicio: "10:00", fim: "13:00" },
        hora2: { dia: "QUI", inicio: "10:00", fim: "12:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 75,
    },
    {
      codigo: "EEL670",
      nome: "Linguagens de Programação",
      ementa:
        "Evolução das linguagens. Teoria das gramáticas e dos sistemas formais. Paradigmas das linguagens de programação. As metodologias de desenvolvimento de software e as linguagens. Interpretação e compilação. Escopo de variáveis. Tipos de dados. Estruturas de controle. Correção de programas. Programando grandes sistemas. Programação funcional. A orientação a objetos. Estudo de caso de linguagem: Pascal com objetos, C++, Fortran, Algol, Cobol, Prolog, Ada, Simula ou outras linguagens, em um mínimo de seis linguagens que exemplifiquem vários paradigmas.",
      credito: 5.0,
      prof: "Miguel",
      sala: "H211",
      preReq: "",
      hora: {
        hora1: { dia: "SEG", inicio: "08:00", fim: "10:00" },
        hora2: { dia: "SEX", inicio: "08:00", fim: "10:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 90,
    },
  ],
};

module.exports = period6;
