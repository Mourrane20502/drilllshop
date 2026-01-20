import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bo9alImg from "../assets/bo9al.jpeg";
import hassa1 from "../assets/hassa1.jpg";
import x7kira from "../assets/x7kira.jpg";

interface Collab {
  id: number;
  imageUrl: string | StaticImageData;
  name: string;
}

const mockCollabData: Collab[] = [
  { id: 1, imageUrl: hassa1, name: "Hassan" },
  { id: 2, imageUrl: x7kira, name: "Sakira" },
  { id: 3, imageUrl: bo9alImg, name: "Bo9al" },
];

export default function CollabsSection() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-32 bg-zinc-950 text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Partnerships
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-center tracking-tighter"
          >
            OUR <span className="text-zinc-500">COLLABS</span>
          </motion.h2>
        </div>

        <div className="collabs-slider-wrapper">
          <Slider {...settings}>
            {mockCollabData.map((collab) => (
              <div key={collab.id} className="px-4 outline-none">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-zinc-900 shadow-2xl"
                >
                  <Image
                    src={collab.imageUrl}
                    alt={collab.name}
                    fill
                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-10 left-10">
                    <p className="text-white font-black text-2xl tracking-tight opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      @{collab.name.toLowerCase()}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .custom-dots {
          bottom: -60px !important;
        }
        .custom-dots li {
          margin: 0 4px !important;
        }
        .custom-dots li button:before {
          content: '' !important;
          width: 8px !important;
          height: 8px !important;
          background: #3f3f46 !important;
          border-radius: 50% !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        .custom-dots li.slick-active button:before {
          background: #F80312 !important;
          width: 24px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
}
