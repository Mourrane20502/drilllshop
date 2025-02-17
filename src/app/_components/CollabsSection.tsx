import Image, { StaticImageData } from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bo9alImg from "../assets/bo9al.jpeg";
import hassa1 from "../assets/hassa1.jpg";
import x7kira from "../assets/x7kira.jpg";

interface Collab {
  id: number;
  imageUrl: string | StaticImageData;
}

const mockCollabData: Collab[] = [
  { id: 1, imageUrl: hassa1 },
  { id: 2, imageUrl: x7kira },
  { id: 3, imageUrl: bo9alImg },
];

export default function CollabsSection() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    dots: true, // Show dots for navigation
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          backgroundColor: "#000",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ display: "flex", justifyContent: "center" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          opacity: 0.6,
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 items for tablet
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // 1 item for mobile
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto text-center mb-2">
        <h2 className="text-5xl font-bold dark:text-white max-md:text-3xl mb-6">
          Our Amazing Collaborators
        </h2>
      </div>

      <Slider {...settings}>
        {mockCollabData.map((collab) => (
          <div key={collab.id} className="flex justify-center items-center p-4">
            <div className="w-full overflow-hidden rounded-lg mb-10">
              <Image
                src={collab.imageUrl}
                alt={`Image ${collab.id}`}
                className="w-[240px] h-[300px] max-md:mx-auto object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
