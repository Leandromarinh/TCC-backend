const period4 = {
  period: "4",
  subjects: [
    {
      codigo: "EEL315",
      nome: "Eletrônica I",
      ementa:
        "Introducao a Eletronica e aos circuitos. Diodos e outros dispositivos.",
      credito: 3.0,
      prof: "José Gabriel",
      sala: "H214",
      preReq: "",
      hora: {
        hora1: { dia: "SEG", inicio: "08:00", fim: "10:00" },
        hora2: { dia: "", inicio: "", fim: "" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 60,
    },
    {
      codigo: "EEL420",
      nome: "Circuitos Elétricos I",
      ementa:
        "Leis de Kirchhoff. Grafos. Formulacao matricial. Teorema de Tellegen. Redes resistivas. Circuitos resistivos genericos. Analise modal de circuitos resistivos nao-lineares. Propriedades dos circuitos resistivos lineares e nao-lineares. Circuitos de 1a ordem. Circuitos de 2a ordem. Analise no estado permanente senoidal.",
      credito: 5.0,
      prof: "Julio Cesar Boscher",
      sala: "H214",
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
      codigo: "EEL470",
      nome: "Algoritmos e Estrut.de Dados",
      ementa:
        "Ordem de um algoritmo. Axiomatização. Tipos abstratos de dados. Arranjos. Pilhas. Filas. Lista encadeada. Arvores. Gráficos. Classificação interna. Tabelas de símbolos. Linguagens C e C++",
      credito: 5.0,
      prof: "Strauss",
      sala: "H208",
      preReq: "",
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
      codigo: "EEL480",
      nome: "Sistemas Digitais",
      ementa:
        "Linguagens de descricao de hardware. VHDL. Projetos de controladores com multiplas entradas. Projetos de controladores usando circuitos MSI e LSI. Projetos de controladores programaveis. Projeto de circuitos assincronos.",
      credito: 5.0,
      prof: "Pedro Cruz",
      sala: "H214",
      preReq: "EEL280 (P)",
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
      codigo: "FIM240",
      nome: "Física IV - a",
      ementa:
        "Ondas eletromagneticas. Energia e momento da luz. Nocoes da relatividade restrita. Otica geometrica. Fenomenos de interferencia. Difracao. Polarizacao. Fisica moderna. Efeitos fotoeletricos e Compton. Átomo de hidrogênio. Difracao de eletrons. Funcao de onda. Equacao de Schroedinger. Principio de incerteza.",
      credito: 4.0,
      prof: "",
      sala: "",
      preReq: "FIM230 (P), MAC238 (P)",
      hora: {
        hora1: { dia: "QUA", inicio: "", fim: "" },
        hora2: { dia: "SEX", inicio: "", fim: "" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 60,
    },
    {
      codigo: "FIN241",
      nome: "Física Experimental IV",
      ementa:
        "Principio do magnetismo, leis de Ampere, Faraday e Lentz. Medidor de campo magnetico. Propriedades magneticas da materia, histerese, corrente alternada: circuitos de corrente alternada RLC, oscilacoes eletromagneticas. Conservacao de energia. Otica geometrica: reflexao, refracao, lentes e prismas. Otica fisica: interferencia, difracao e polarizacao",
      credito: 1.0,
      prof: "",
      sala: "",
      preReq: "FIM231 (P), FIN231 (P)",
      hora: {
        hora1: { dia: "QUI", inicio: "13:00", fim: "15:00" },
        hora2: { dia: "", inicio: "", fim: "" },
        hora3: { dia: "", inicio: "", fim: "" },
      },
      nota: "",
      status: "",
      cargaHor: 30,
    },
  ],
};

module.exports = period4;
