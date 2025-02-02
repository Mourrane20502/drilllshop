import { StaticImageData } from "next/image";
import hoverImage from "../app/assets/drillguys.jpg";
import Image from "../app/assets/productNikeHover.jpg";
import slaughterhover from "../app/assets/slaughter.jpg";
import slaughter from "../app/assets/slaughterhover.jpg";
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
    name: "Nike Jackets",
    price: 300,
    description:
      "This is a jacket that will keep you warm in the winter and cool in the summer.",
    image: Image,
    hoverImage: hoverImage,
    href: "/product/1",
    isAvailable: true,
    ProductImages: [Image, hoverImage, Image, hoverImage],
    taille: ["S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L", "XL"],
    category: "Clothes",
    bestSelling: true,
  },
  {
    id: 2,
    name: "Adidas Shoes",
    price: 250,
    description: "Durable and stylish sports shoes for all-day comfort.",
    image: Image,
    hoverImage: hoverImage,
    href: "/product/2",
    isAvailable: true,
    taille: ["40", "41", "42", "43"],
    category: "Shoes",
    bestSelling: false,
  },
  {
    id: 3,
    name: "Leather Belt",
    price: 150,
    description: "High-quality leather belt for a sophisticated look.",
    image: Image,
    hoverImage: hoverImage,
    href: "/product/3",
    isAvailable: true,
    taille: ["S", "M", "L", "XL"],
    category: "Accessories",
    bestSelling: true,
  },
  {
    id: 4,
    name: "Yamaha Hoodie",
    price: 320,
    description: "Comfortable hoodie for outdoor adventures.",
    image: slaughter,
    hoverImage: slaughterhover,
    href: "/product/4",
    taille: ["M", "L", "XL", "2XL"],
    category: "Clothes",
    bestSelling: false,
  },
  {
    id: 5,
    name: "Classic Watch",
    price: 800,
    description: "Elegant timepiece for formal and casual occasions.",
    image: Image,
    hoverImage: hoverImage,
    href: "/product/5",
    taille: ["One Size"],
    category: "Accessories",
    bestSelling: true,
  },
  {
    id: 6,
    name: "Running Shoes",
    price: 200,
    description: "Lightweight shoes for enhanced running performance.",
    image: Image,
    hoverImage: hoverImage,
    href: "/product/6",
    taille: ["40", "41", "42", "43"],
    category: "Shoes",
    bestSelling: false,
  },
  {
    id: 7,
    name: "Tesla Jacket",
    price: 400,
    description: "Modern and sleek jacket with advanced insulation.",
    image: slaughter,
    hoverImage: slaughterhover,
    href: "/product/7",
    taille: ["M", "L", "XL", "2XL"],
    category: "Clothes", // Category: Clothes,
    bestSelling: false,
  },
  {
    id: 8,
    name: "Travel Backpack",
    price: 120,
    description: "Spacious and durable backpack for all your adventures.",
    image: Image,
    hoverImage: hoverImage,
    href: "/product/8",
    taille: ["One Size"],
    category: "Accessories",
    bestSelling: false,
  },
  {
    id: 9,
    name: "Formal Shoes",
    price: 500,
    description: "Polished leather shoes for professional settings.",
    image: Image,
    hoverImage: hoverImage,
    href: "/product/9",
    taille: ["40", "41", "42", "43"],
    category: "Shoes",
    bestSelling: true,
  },
  {
    id: 10,
    name: "Chevrolet Hoodie",
    price: 350,
    description: "Stylish and warm hoodie for car enthusiasts.",
    image: slaughter,
    hoverImage: slaughterhover,
    href: "/product/10",
    taille: ["M", "L", "XL", "2XL"],
    category: "Clothes", // Category: Clothes
    bestSelling: true,
  },
  {
    id: 11,
    name: "Sunglasses",
    price: 100,
    description: "Protect your eyes with these trendy sunglasses.",
    image: Image,
    hoverImage: hoverImage,
    href: "/product/11",
    taille: ["One Size"],
    category: "Accessories",
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
