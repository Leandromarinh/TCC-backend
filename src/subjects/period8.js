const period8 = {
  period: "8",
  subjects: [
    {
      codigo: "EEE387",
      nome: "Conversão de Energia",
      ementa:
        "Circuitos monofasicos e trifasicos em regime permanente. Transformadores trifasicos. Maquinas eletricas em regime permanente: sincronas, assincronas, trifasicas e monofasicas e de corrente continua.",
      credito: 5.0,
      prof: "Watanabe",
      sala: "H204",
      preReq: "EEL330 (P), EEL525 (P)",
      hora: {
        hora1: { dia: "SEG", inicio: "10:00", fim: "12:00" },
        hora2: { dia: "QUA", inicio: "10:00", fim: "13:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 75,
    },
    {
      codigo: "EEL710",
      nome: "Instrumentação e Técnicas de Medidas",
      ementa:
        "Sistemas de aquisicao de dados. Conformadores de onda. Barramento de dados. Detetores e transdutores. Interfaceamento e eletronica de leitura. Conversores AD/DA. Amplificadores de instrumentacao e isolacao. Medicao. Analise de dados. Componentes e circuitos especiais. Circuitos nao-lineares. Ruido e tecnicas de aterramento e isolacao",
      credito: 5.0,
      prof: "",
      sala: "H204",
      preReq: "EEL515 (P)",
      hora: {
        hora1: { dia: "TER", inicio: "10:00", fim: "12:00" },
        hora2: { dia: "QUI", inicio: "10:00", fim: "13:00" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 75,
    },
    {
      codigo: "EEWX00",
      nome: "Projeto de Graduação",
      ementa:
        "Desenvolvimento de um projeto objetivando a aplicação de conhecimentos adquiridos ao longo do curso, com supervisão de um professor orientador.",
      credito: 4.0,
      prof: "",
      sala: "",
      preReq: "",
      hora: {
        hora1: { dia: "", inicio: "", fim: "" },
        hora2: { dia: "", inicio: "", fim: "" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 180,
    },
  ],
};

module.exports = period8;
