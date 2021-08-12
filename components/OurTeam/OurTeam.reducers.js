const initialState = [
  {
    name: "Lilian Figueiredo",
    designation: "Gerente Geral.",
    image: "images/img-1.jpg",
    about:
      "Responsável por liderar o time Easy Care, promover a integração, a qualidade e o cuidado com os clientes na construção e realização dos seus sonhos.",
  },
  {
    name: "Fábio Silva:",
    designation: "Diretor de comunicação",
    image: "images/img-2.jpg",
    about:
      "Responsável pelos relacionamentos, gestão de negócios, parcerias, comunicação do grupo e negociação.",
  },
  
  
];

const ourTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ourTeamReducer;
