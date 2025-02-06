"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import bo9alImg from "../assets/bo9al.jpg";
import totoImg from "../assets/toto.jpg";

interface Collab {
  id: number;
  name: string;
  imageUrl: string | StaticImageData;
}

const mockCollabData: Collab[] = [
  { id: 1, name: "Nom  :  ", imageUrl: bo9alImg },
  { id: 2, name: "Nom :", imageUrl: totoImg },
  { id: 3, name: "Nom :", imageUrl: bo9alImg },
  { id: 4, name: "Nom :", imageUrl: totoImg },
];

export default function CollabsSection() {
  return (
    <section className="py-20 bg-black  text-white">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold dark:text-white max-md:text-2xl">
          Our Amazing Collaborators
        </h2>
        <p className="mt-4 text-lg dark:text-white text-center max-md:text-md">
          Check out the incredible people we’ve worked with!
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="collabs-container items-center justify-center  max-md:grid max-md:grid-cols-4 max-md:gap-8 flex animate-scroll gap-6 space-x-4 flex-wrap">
          {mockCollabData.map((collab) => (
            <div
              key={collab.id}
              className="flex flex-col justify-center items-center w-32 mx-4"
            >
              <Image
                src={collab.imageUrl}
                alt={collab.name}
                className="w-full h-auto object-cover rounded-md mb-4 transition-all duration-500 ease-in-out transform hover:scale-105"
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
