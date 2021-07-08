export const productsInitialState = {
  100: {
    id: 100,
    name: "Energia Fotovoltaica",
    mrp: 999,
    selling_price: 799,
    currency: "₹",
    description:
      "Soluções em energia fotovoltaica para reduzir os seus gastos, e preservação, e conservação ambiental.",
    stock_qty: 100,
    sold_qty: 50,
    featured_image: "img-pro-01.jpg",
    images: [
      {
        big: "big-img-01.jpg",
        small: "smp-img-01.jpg",
      },
      {
        big: "big-img-02.jpg",
        small: "smp-img-02.jpg",
      },
      {
        big: "big-img-03.jpg",
        small: "smp-img-03.jpg",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    tags: ["top-featured", "Energia-Fotovoltaica"],
  },
  101: {
    id: 101,
    name: "Pedra esculpida",
    mrp: 599,
    selling_price: 499,
    currency: "₹",
    description:
      "Entregamos desde o projeto até a instalação com total segurança. Para levar solidez, sofisticação e bom gosto ao seu sonho.",
    stock_qty: 100,
    sold_qty: 50,
    featured_image: "img-pro-02.jpg",
    images: [
      {
        big: "big-img-01.jpg",
        small: "smp-img-01.jpg",
      },
      {
        big: "big-img-02.jpg",
        small: "smp-img-02.jpg",
      },
      {
        big: "big-img-03.jpg",
        small: "smp-img-03.jpg",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["Pedra-esculpida"],
  },
  102: {
    id: 101,
    name: "Móveis Planejados",
    mrp: 599,
    selling_price: 499,
    currency: "₹",
    description:
      "Somos especialistas no trabalho com MDF, um material versátil e maleável para a confecção de ambientes planejados e com requinte.",
    stock_qty: 100,
    sold_qty: 50,
    featured_image: "móveis-02.jpg",
    images: [
      {
        big: "big-img-01.jpg",
        small: "smp-img-01.jpg",
      },
      {
        big: "big-img-02.jpg",
        small: "smp-img-02.jpg",
      },
      {
        big: "big-img-03.jpg",
        small: "smp-img-03.jpg",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["Móveis-planejados"],
  },
  103: {
    id: 101,
    name: "Móveis Planejados",
    mrp: 599,
    selling_price: 499,
    currency: "₹",
    description:
      "Somos especialistas no trabalho com MDF, um material versátil e maleável para a confecção de ambientes planejados e com requinte.",
    stock_qty: 100,
    sold_qty: 50,
    featured_image: "móveis-02.jpg",
    images: [
      {
        big: "big-img-01.jpg",
        small: "smp-img-01.jpg",
      },
      {
        big: "big-img-02.jpg",
        small: "smp-img-02.jpg",
      },
      {
        big: "big-img-03.jpg",
        small: "smp-img-03.jpg",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["Móveis-planejados"],
  },
  104: {
    id: 101,
    name: "Móveis Planejados",
    mrp: 599,
    selling_price: 499,
    currency: "₹",
    description:
      "Somos especialistas no trabalho com MDF, um material versátil e maleável para a confecção de ambientes planejados e com requinte.",
    stock_qty: 100,
    sold_qty: 50,
    featured_image: "móveis-02.jpg",
    images: [
      {
        big: "big-img-01.jpg",
        small: "smp-img-01.jpg",
      },
      {
        big: "big-img-02.jpg",
        small: "smp-img-02.jpg",
      },
      {
        big: "big-img-03.jpg",
        small: "smp-img-03.jpg",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["Móveis-planejados"],
  },
};

const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
