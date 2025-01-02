import { StaticImageData } from "next/image";
import Image from "../app/assets/ProductNike.PNG";
import hoverImage from "../app/assets/productNikeHover.PNG";
import slaughterhover from "../app/assets/slaughter.PNG";
import slaughter from "../app/assets/slaughterhover.PNG";

// export const ProductPage = [
//   {id : 1 , name:"Nike Jackets", price: 300, description: "This is a jacket that will keep you warm in the winter and cool in the summer.", image: Image, hoverImage: hoverImage},
// ]
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string | StaticImageData; // Assuming Image is of type 'any' here (you can use 'StaticImageData' if you want stricter typing)
  hoverImage: StaticImageData;
  href: string;
  isAvailable?: boolean;
  ProductImages?: string[];
}

export const ProductsList : Product[] = [
  {
    id: 1,
    name: "Nike Jackets",
    
    price: 300,
    description: "This is a jacket that will keep you warm in the winter and cool in the summer.",
    image: Image,
    hoverImage: hoverImage,
    href : "/product/1",
    isAvailable: true,
    ProductImages : [Image, hoverImage, Image, hoverImage]
  },
  {
    id: 2,
    name: "Adidas Jackets",
    price: 300,
    description: "This is a jacket that will keep you warm in the winter and cool in the summer.",
    image: Image,
    hoverImage: hoverImage, 
    href : "/product/2",
    isAvailable :false
    // ProductImages : [Image, hoverImage, Image, hoverImage]


  },
  {
    id: 3,
    name: "Puma Jackets",
    price: 300,
    description: "This is a jacket that will keep you warm in the winter and cool in the summer.",
    image: Image,
    hoverImage: hoverImage,
    href : "/product/3",
    // ProductImages : [Image, hoverImage, Image, hoverImage]

  },
  {
    id: 4,
    name: "Porche Jackets",
    price: 300,
    description: "This is a jacket that will keep you warm in the winter and cool in the summer.",
    image: Image,
    hoverImage: hoverImage,
    href : "/product/4",   
    //  ProductImages : [Image, hoverImage, Image, hoverImage]

  },
  {
    id: 5,
    name: "Yamaha Jackets",
    price: 300,
    description: "This is a jacket that will keep you warm in the winter and cool in the summer.",
    image: Image,
    hoverImage: hoverImage,
    href : "/product/5",
    // ProductImages : [Image, hoverImage, Image, hoverImage]

  },
  {
    id: 6,
    name: "Yuta Jackets",
    price: 300,
    description: "This is a jacket that will keep you warm in the winter and cool in the summer.",
    image: Image,
    hoverImage: hoverImage,
    href : "/product/6"
  },
  {
    id: 7,
    name: "Slaughter Hoodie",
    price: 300,
    description: "This is a jacket that will keep you warm in the winter and cool in the summer.",
    image: slaughter,
    hoverImage: slaughterhover,
    href : "/product/7"
  },
  {
    id: 8,
    name: "Glovo Hoodie",
    price: 300,
    description: "This is a jacket that will keep you warm in the winter and cool in the summer.",
    image: slaughter,
    hoverImage: slaughterhover,
    href : "/product/8"
  }, {
    id: 9,
    name: "Boss Hoodie",
    price: 300,
    description: "This is a jacket that will keep you warm in the winter and cool in the summer.",
    image: slaughter,
    hoverImage: slaughterhover,
    href : "/product/9"
  },
  {
    id: 10,
    name: "Chevrolet Hoodie",
    price: 300,
    description: "This is a jacket that will keep you warm in the winter and cool in the summer.",
    image: slaughter,
    hoverImage: slaughterhover,
    href : "/product/10"
  },
  {
    id: 11,
    name: "Tesla Hoodie",
    price: 300,
    description: "This is a jacket that will keep you warm in the winter and cool in the summer.",
    image: slaughter,
    hoverImage: slaughterhover,
    href : "/product/11"
  },

] as const;

export interface Feedback {
  id: number;
  name: string;
  comment: string;
  rating: number;
  date: string;
}


export const feedback  = [
  {
    id: 1,
    name: 'John Doe',
    comment: 'Great service, will definitely use again!',
    rating: 5,
    date: '2024-12-30',
  },
  {
    id: 2,
    name: 'Jane Smith',
    comment: 'Good experience, but the wait time was a bit long.',
    rating: 4,
    date: '2024-12-29',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    comment: 'Not satisfied, the product quality was below expectations.',
    rating: 2,
    date: '2024-12-28',
  },
  {
    id: 4,
    name: 'Emily Davis',
    comment: 'Overall, happy with the purchase. The customer support was excellent!',
    rating: 4,
    date: '2024-12-27',
  }
] as const;
