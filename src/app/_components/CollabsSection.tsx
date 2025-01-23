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
  { id: 5, name: "Nom :", imageUrl: bo9alImg },
  { id: 6, name: "Nom :", imageUrl: totoImg },
  { id: 7, name: "Nom :", imageUrl: totoImg },
  { id: 8, name: "Nom :", imageUrl: bo9alImg },
  { id: 9, name: "Nom :", imageUrl: totoImg },
];

export default function CollabsSection() {
  return (
    <section className="py-20 bg-black dark:bg-white dark:shadow-lg text-white mb-5">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold dark:text-black max-md:text-2xl">
          Our Amazing Collaborators
        </h2>
        <p className="mt-4 text-lg dark:text-black text-center max-md:text-md">
          Check out the incredible people we’ve worked with!
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="collabs-container items-center justify-center max-md:items-baseline flex animate-scroll gap-6">
          {mockCollabData.map((collab) => (
            <div
              key={collab.id}
              className="flex flex-col justify-center items-center w-32 mx-4"
            >
              <Image
                src={collab.imageUrl}
                alt={collab.name}
                className="w-[200px] h-32 object-cover rounded-md mb-4"
                width={150}
                height={150}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
