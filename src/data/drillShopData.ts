import { StaticImageData } from "next/image";
import short from "../app/assets/1.png";
import short2 from "../app/assets/2.png";
import short3 from "../app/assets/3.png";
import short4 from "../app/assets/4.png";
import short5 from "../app/assets/5.png";
import short6 from "../app/assets/6.png";
import short7 from "../app/assets/7.png";
import iceflow from "../app/assets/clothe.png";
import iceFlowHover from "../app/assets/clothehover.png";
import crtz from "../app/assets/crtz.png";
import crtzhover from "../app/assets/crtzhover.png";
import cubainHover from "../app/assets/cubainhover.jpg";
import cubain from "../app/assets/cubainmain.jpg.png";
import debardeur2 from "../app/assets/debarbeur2.png";
import debardeur3 from "../app/assets/debardeur3.png";
import debardeur4 from "../app/assets/debardeur4.png";
import debardeur from "../app/assets/debardeurmain.png";
import ensembleCorteiz from "../app/assets/ensemble_corteiz1.png";
import ensembleCorteiz2 from "../app/assets/ensemble_corteiz2.png";
import ensembleCorteiz3 from "../app/assets/ensemble_corteiz3.png";
import ensembleCorteiz4 from "../app/assets/ensemble_corteiz4.png";
import glove from "../app/assets/glove.png";
import glove2 from "../app/assets/glove2.png";
import glove3 from "../app/assets/glove3.png";
import gloveHover from "../app/assets/glovehover.png";
import glove2hover from "../app/assets/glover2hover.png";
import glove3hover from "../app/assets/glover3hover.png";
import ilyas from "../app/assets/ilyas.png";
import ilyas2 from "../app/assets/ilyas2.png";
import ilyas3 from "../app/assets/ilyas3.png";
import ilyas4 from "../app/assets/ilyas4.png";
import ilyas5 from "../app/assets/ilyas5.png";
import jacket from "../app/assets/jacket.png";
import jacket2 from "../app/assets/jacket2.png";
import jacket3 from "../app/assets/jacket3.png";
import jacket4 from "../app/assets/jacket4.png";
import jacket5 from "../app/assets/jacket6.png";
import nikeshort from "../app/assets/nikeshort.png";
import nikeshorthover from "../app/assets/nikeshorthover.png";
import pendentif2 from "../app/assets/pendentif2.png";
import pendentif3 from "../app/assets/pendentif3.png";
import pendentif4 from "../app/assets/pendentif4.png";
import pendentif5 from "../app/assets/pendentif5.png";
import sabr from "../app/assets/sabr.png";
import sabrhover from "../app/assets/sabrhover.png";
import savage from "../app/assets/savage.png";
import shoe1 from "../app/assets/shoe1.jpg";
import shoe2 from "../app/assets/shoe2.jpg";
import shoe3 from "../app/assets/shoe3.png";
import shoe3hover from "../app/assets/shoe3hover.png";
import shoe1hover from "../app/assets/shoehover.avif";
import shoe2hover from "../app/assets/shover2hover.jpg";
import stussy from "../app/assets/stussy.png";
import stussyHover from "../app/assets/stussyhover.png";
import tennis from "../app/assets/tennis.png";
import tennis2 from "../app/assets/tennis2.png";
import tennis3 from "../app/assets/tennis3.png";
import tnShoes from "../app/assets/tn.png";
import tnShoes2 from "../app/assets/tn2.png";
import tnShoes3 from "../app/assets/tn3.png";
import iconUser from "../app/assets/toto.jpg";
import trap from "../app/assets/trap.png";
import trap2 from "../app/assets/trap2.png";
import trap3 from "../app/assets/trap3.png";
import trap4 from "../app/assets/trap4.png";
import polo from "../app/assets/tricot.png";
import polo2 from "../app/assets/tricot2.png";
import polo3 from "../app/assets/tricot3.png";

// export const ProductPage = [
//   {id : 1 , name:"Nike Jackets", price: 300, description: "This is a jacket that will keep you warm in the winter and cool in the summer.", image: Image, hoverImage: hoverImage},
// ]

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string | StaticImageData;
  hoverImage: StaticImageData;
  href: string;
  isAvailable?: boolean;
  ProductImages?: (string | StaticImageData)[];
  taille: string[];
  availableSizes?: string[];
  category: "Accessories" | "Shoes" | "Clothes";
  bestSelling?: boolean;
  hasMultipleColors?: boolean;
  colors?: string[];
}

export const ProductsList: Product[] = [
  {
    id: 1,
    name: "CRTZ x Slaughter Gang",
    price: 300,
    description:
      "This is blends bold street style with premium quality and limited edition.",
    image: crtz,
    hoverImage: crtzhover,
    href: "/product/1",
    isAvailable: true,
    ProductImages: [crtz, crtzhover],
    taille: ["S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L", "XL"],
    category: "Clothes",
    bestSelling: true,
  },
  {
    id: 2,
    name: "Corteiz Nike Air Max 95 DarkGreen",
    price: 250,
    description:
      "A bold collaboration featuring the Nike Air Max 95 in a striking darkgreen colorway.",
    image: shoe2,
    hoverImage: shoe2hover,
    ProductImages: [shoe2, shoe2hover],
    href: "/product/2",
    isAvailable: true,
    taille: ["40", "41", "42", "43"],
    category: "Shoes",
    bestSelling: false,
  },
  {
    id: 3,
    name: "Nike Gloves",
    price: 150,
    description: "High-quality leather belt for a sophisticated look.",
    image: glove,
    hoverImage: gloveHover,
    ProductImages: [glove, gloveHover],
    href: "/product/3",
    isAvailable: true,
    taille: ["S", "M", "L", "XL"],
    category: "Accessories",
    bestSelling: true,
  },
  {
    id: 4,
    name: "Ice FLOW Collection",
    price: 320,
    description:
      "A sleek, cool collection featuring icy tones and modern designs.",
    image: iceflow,
    hoverImage: iceFlowHover,
    ProductImages: [iceflow, iceFlowHover],

    href: "/product/4",
    taille: ["M", "L", "XL", "2XL"],
    category: "Clothes",
    bestSelling: false,
    isAvailable: true,
  },
  {
    id: 5,
    name: "NorthFace Gloves",
    price: 800,
    description: "Elegant timepiece for formal and casual occasions.",
    image: glove2,
    hoverImage: glove2hover,
    ProductImages: [glove2, glove2hover],

    href: "/product/5",
    taille: ["One Size"],
    category: "Accessories",
    bestSelling: true,
  },
  {
    id: 6,
    name: "Corteiz Nike Air Max 95 Pink",
    price: 200,
    description:
      "A bold collaboration featuring the Nike Air Max 95 in a striking pink colorway.",
    image: shoe3,
    hoverImage: shoe3hover,
    ProductImages: [shoe3, shoe3hover],

    href: "/product/6",
    taille: ["40", "41", "42", "43"],
    category: "Shoes",
    bestSelling: false,
  },
  {
    id: 7,
    name: "STÜSSY TEE Collection",
    price: 400,
    description:
      "A fresh collection of classic tees with iconic designs and bold graphics",
    image: stussy,
    hoverImage: stussyHover,
    ProductImages: [stussy, stussyHover],

    href: "/product/7",
    taille: ["M", "L", "XL", "2XL"],
    category: "Clothes", // Category: Clothes,
    bestSelling: false,
  },
  {
    id: 8,
    name: "Trapstar Gloves",
    price: 120,
    description: "Spacious and durable backpack for all your adventures.",
    image: glove3,
    hoverImage: glove3hover,
    ProductImages: [glove3, glove3hover],

    href: "/product/8",
    taille: ["One Size"],
    category: "Accessories",
    bestSelling: false,
  },
  {
    id: 9,
    name: "Corteiz Nike Air Max 95 Blue",
    price: 500,
    description:
      "A bold collaboration featuring the Nike Air Max 95 in a striking blue colorway.",
    image: shoe1,
    hoverImage: shoe1hover,
    ProductImages: [shoe1, shoe1hover],

    href: "/product/9",
    taille: ["40", "41", "42", "43"],
    category: "Shoes",
    bestSelling: true,
  },
  {
    id: 10,
    name: "NIKE TRACK PANTS ",
    price: 350,
    description:
      "Comfortable and stylish with a sleek, breathable design. Perfect for any activity.",
    image: nikeshort,
    hoverImage: nikeshorthover,
    ProductImages: [nikeshort, nikeshorthover],

    href: "/product/10",
    taille: ["S", "M", "L", "XL"],
    category: "Clothes",
    bestSelling: true,
    isAvailable: true,
  },
  {
    id: 11,
    name: "Cubain Chain",
    price: 100,
    description: "Protect your eyes with these trendy sunglasses.",
    image: cubainHover,
    hoverImage: cubain,
    ProductImages: [cubainHover, cubain],

    href: "/product/11",
    taille: ["One Size"],
    category: "Accessories",
    bestSelling: false,
  },
  {
    id: 12,
    name: "صبر  - Summer Collection",
    price: 400,
    description:
      "A blend of style and comfort with light designs and vibrant summer colors",
    image: sabr,
    hoverImage: sabrhover,
    ProductImages: [sabr, sabrhover],

    href: "/product/12",
    taille: ["M", "L", "XL", "2XL"],
    category: "Clothes",
    bestSelling: false,
  },
  {
    id: 13,
    name: "Nike Puffer Jacket",
    price: 300,
    description:
      "Warm, lightweight with a sleek design. Perfect for staying cozy in cold weather.",
    image: ilyas,
    hoverImage: ilyas2,
    href: "/product/13",
    isAvailable: true,
    ProductImages: [ilyas, ilyas2, ilyas3, ilyas4, ilyas5],
    taille: ["S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L", "XL"],
    category: "Clothes",
    bestSelling: true,
  },
  {
    id: 14,
    name: "Black Polo Corteiz",
    price: 300,
    description:
      "Warm, lightweight with a sleek design. Perfect for staying cozy in cold weather.",
    image: polo,
    hoverImage: polo2,
    href: "/product/14",
    isAvailable: true,
    ProductImages: [polo, polo3, polo2],
    taille: ["S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L", "XL"],
    category: "Clothes",
    bestSelling: false,
  },
  {
    id: 15,
    name: "Débardeur Corteiz",
    price: 300,
    description:
      "Warm, lightweight with a sleek design. Perfect for staying cozy in cold weather.",
    image: debardeur,
    hoverImage: debardeur4,
    href: "/product/15",
    isAvailable: true,
    ProductImages: [debardeur, debardeur2, debardeur3, debardeur4],
    taille: ["S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L", "XL"],
    category: "Clothes",
    bestSelling: false,
  },
  {
    id: 16,
    name: "Corteiz Spring jacket",
    price: 300,
    description:
      "Warm, lightweight with a sleek design. Perfect for staying cozy in cold weather.",
    image: jacket,
    hoverImage: jacket2,
    href: "/product/16",
    isAvailable: true,
    ProductImages: [jacket, jacket2, jacket3, jacket4, jacket5],
    taille: ["S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L", "XL"],
    category: "Clothes",
    bestSelling: false,
  },
  {
    id: 17,
    name: "Pendentifs",
    price: 100,
    description: "Protect your eyes with these trendy sunglasses.",
    image: savage,
    hoverImage: pendentif2,
    ProductImages: [savage, pendentif2, pendentif3, pendentif4, pendentif5],

    href: "/product/17",
    taille: ["One Size"],
    category: "Accessories",
    bestSelling: false,
  },
  {
    id: 18,
    name: "Tennis Chain",
    price: 100,
    description: "Protect your eyes with these trendy sunglasses.",
    image: tennis,
    hoverImage: tennis2,
    ProductImages: [tennis, tennis2, tennis3],
    href: "/product/18",
    taille: ["One Size"],
    category: "Accessories",
    bestSelling: false,
  },
  {
    id: 19,
    name: "Ensemble Corteiz",
    price: 100,
    description: "Protect your eyes with these trendy sunglasses.",
    image: ensembleCorteiz,
    isAvailable: true,
    hoverImage: ensembleCorteiz2,
    ProductImages: [
      ensembleCorteiz,
      ensembleCorteiz2,
      ensembleCorteiz3,
      ensembleCorteiz4,
    ],
    href: "/product/19",
    taille: ["S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L", "XL"],
    category: "Clothes",
    bestSelling: false,
  },
  {
    id: 20,
    name: "Short Corteiz",
    price: 200,
    description: "Protect your eyes with these trendy sunglasses.",
    image: short,
    isAvailable: true,
    hoverImage: short2,
    ProductImages: [short, short2, short3, short4, short5, short6, short7],
    href: "/product/20",
    taille: ["S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L", "XL"],
    category: "Clothes",
    bestSelling: false,
    hasMultipleColors: true,
    colors: ["Black", "White"],
  },
  {
    id: 21,
    name: "Tn Shoes",
    price: 250,
    description:
      "A bold collaboration featuring the Nike Air Max 95 in a striking darkgreen colorway.",
    image: tnShoes,
    hoverImage: tnShoes2,
    ProductImages: [tnShoes, tnShoes2, tnShoes3],
    href: "/product/21",
    isAvailable: true,
    taille: ["40", "41", "42", "43"],
    availableSizes: ["40", "41", "42", "43"],
    category: "Shoes",
    bestSelling: false,
  },
  {
    id: 22,
    name: "Sac Trapstar",
    price: 250,
    description:
      "A bold collaboration featuring the Nike Air Max 95 in a striking darkgreen colorway.",
    image: trap,
    hoverImage: trap2,
    ProductImages: [trap, trap2, trap3, trap4],
    hasMultipleColors: true,
    colors: ["Blue", "Black", "White"],
    href: "/product/22",
    isAvailable: true,
    taille: ["40", "41", "42", "43"],
    availableSizes: ["40", "41", "42", "43"],
    category: "Clothes",
    bestSelling: false,
  },
];
export interface Feedback {
  id: number;
  name: string;
  comment: string;
  rating: number;
  date: string;
  user: StaticImageData;
}

export const feedback: Feedback[] = [
  {
    id: 1,
    name: "John Doe",
    comment:
      "Great service, will definitely use again ,Great service, will definitely use again,Great service, will definitely use again,Great service, will definitely use again,Great service, will definitely use again",
    rating: 5,
    date: "2024-12-30",
    user: iconUser,
  },
  {
    id: 2,
    name: "Jane Smith",
    comment:
      "Great service, will definitely use again ,Great service, will definitely use again,Great service, will definitely use again,Great service, will definitely use again,Great service, will definitely use again",
    rating: 4,
    date: "2024-12-29",
    user: iconUser,
  },
  {
    id: 3,
    name: "Alex Johnson",
    comment:
      "Great service, will definitely use again ,Great service, will definitely use again,Great service, will definitely use again,Great service, will definitely use again,Great service, will definitely use again",
    rating: 2,
    date: "2024-12-28",
    user: iconUser,
  },
  {
    id: 4,
    name: "Emily Davis",
    comment:
      "Great service, will definitely use again ,Great service, will definitely use again,Great service, will definitely use again,Great service, will definitely use again,Great service, will definitely use again",
    rating: 4,
    date: "2024-12-27",
    user: iconUser,
  },
] as const;
