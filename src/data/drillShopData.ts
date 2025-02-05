import { StaticImageData } from "next/image";
import iceflow from "../app/assets/clothe.png";
import iceFlowHover from "../app/assets/clothehover.png";
import crtz from "../app/assets/crtz.png";
import crtzhover from "../app/assets/crtzhover.png";
import cubain from "../app/assets/cubain.jpg";
import cubainHover from "../app/assets/cubainhover.jpg";
import hoverImage from "../app/assets/drillguys.jpg";
import glove from "../app/assets/glove.png";
import glove2 from "../app/assets/glove2.png";
import glove3 from "../app/assets/glove3.png";
import gloveHover from "../app/assets/glovehover.png";
import glove2hover from "../app/assets/glover2hover.png";
import glove3hover from "../app/assets/glover3hover.png";
import nikeshort from "../app/assets/nikeshort.png";
import nikeshorthover from "../app/assets/nikeshorthover.png";
import Image from "../app/assets/productNikeHover.jpg";
import sabr from "../app/assets/sabr.png";
import sabrhover from "../app/assets/sabrhover.png";
import shoe1 from "../app/assets/shoe1.jpg";
import shoe2 from "../app/assets/shoe2.jpg";
import shoe3 from "../app/assets/shoe3.png";
import shoe3hover from "../app/assets/shoe3hover.png";
import shoe1hover from "../app/assets/shoehover.avif";
import shoe2hover from "../app/assets/shover2hover.jpg";
import stussy from "../app/assets/stussy.png";
import stussyHover from "../app/assets/stussyhover.png";
import iconUser from "../app/assets/toto.jpg";
// export const ProductPage = [
//   {id : 1 , name:"Nike Jackets", price: 300, description: "This is a jacket that will keep you warm in the winter and cool in the summer.", image: Image, hoverImage: hoverImage},
// ]
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string | StaticImageData;
  hoverImage: StaticImageData;
  href: string;
  isAvailable?: boolean;
  ProductImages?: string[] | StaticImageData[];
  taille: string[];
  availableSizes?: string[];
  category: "Accessories" | "Shoes" | "Clothes";
  bestSelling?: boolean;
}

export const ProductsList: Product[] = [
  {
    id: 1,
    name: "Crtz X Slaughter Gang",
    price: 300,
    description:
      "This is a jacket that will keep you warm in the winter and cool in the summer.",
    image: crtz,
    hoverImage: crtzhover,
    href: "/product/1",
    isAvailable: true,
    ProductImages: [crtz, crtzhover, Image, hoverImage],
    taille: ["S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L", "XL"],
    category: "Clothes",
    bestSelling: true,
  },
  {
    id: 2,
    name: "Corteiz Nike Air Max 95 DarkGreen",
    price: 250,
    description: "Durable and stylish sports shoes for all-day comfort.",
    image: shoe2,
    hoverImage: shoe2hover,
    ProductImages: [Image, hoverImage, Image, hoverImage],
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
    ProductImages: [Image, hoverImage, Image, hoverImage],
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
    description: "Comfortable hoodie for outdoor adventures.",
    image: iceflow,
    hoverImage: iceFlowHover,
    ProductImages: [Image, hoverImage, Image, hoverImage],

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
    ProductImages: [Image, hoverImage, Image, hoverImage],

    href: "/product/5",
    taille: ["One Size"],
    category: "Accessories",
    bestSelling: true,
  },
  {
    id: 6,
    name: "Corteiz Nike Air Max 95 Pink",
    price: 200,
    description: "Lightweight shoes for enhanced running performance.",
    image: shoe3,
    hoverImage: shoe3hover,
    ProductImages: [Image, hoverImage, Image, hoverImage],

    href: "/product/6",
    taille: ["40", "41", "42", "43"],
    category: "Shoes",
    bestSelling: false,
  },
  {
    id: 7,
    name: "STÜSSY TEE Collection",
    price: 400,
    description: "Modern and sleek jacket with advanced insulation.",
    image: stussy,
    hoverImage: stussyHover,
    ProductImages: [Image, hoverImage, Image, hoverImage],

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
    ProductImages: [Image, hoverImage, Image, hoverImage],

    href: "/product/8",
    taille: ["One Size"],
    category: "Accessories",
    bestSelling: false,
  },
  {
    id: 9,
    name: "Corteiz Nike Air Max 95 Blue",
    price: 500,
    description: "Polished leather shoes for professional settings.",
    image: shoe1,
    hoverImage: shoe1hover,
    ProductImages: [Image, hoverImage, Image, hoverImage],

    href: "/product/9",
    taille: ["40", "41", "42", "43"],
    category: "Shoes",
    bestSelling: true,
  },
  {
    id: 10,
    name: "NIKE TRACK PANTS ",
    price: 350,
    description: "Stylish and warm hoodie for car enthusiasts.",
    image: nikeshort,
    hoverImage: nikeshorthover,
    ProductImages: [Image, hoverImage, Image, hoverImage],

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
    image: cubain,
    hoverImage: cubainHover,
    ProductImages: [Image, hoverImage, Image, hoverImage],

    href: "/product/11",
    taille: ["One Size"],
    category: "Accessories",
    bestSelling: false,
  },
  {
    id: 12,
    name: "صبر  Summer Collection",
    price: 400,
    description: "Modern and sleek jacket with advanced insulation.",
    image: sabr,
    hoverImage: sabrhover,
    ProductImages: [Image, hoverImage, Image, hoverImage],

    href: "/product/7",
    taille: ["M", "L", "XL", "2XL"],
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
