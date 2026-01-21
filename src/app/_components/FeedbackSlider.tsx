"use client";
import { feedback } from "@/data/drillShopData";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const MarqueeRow = ({ items, reverse = false, speed = 50 }: { items: typeof feedback, reverse?: boolean, speed?: number }) => {
  return (
    <div className="flex w-full overflow-hidden py-4">
      <motion.div
        animate={{
          x: reverse ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="flex gap-6 whitespace-nowrap"
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="w-[350px] md:w-[450px] glass-card p-6 md:p-8 rounded-[2rem] flex flex-col gap-5 border-white/5 shadow-xl hover:-translate-y-2 transition-transform duration-300 group"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand/20">
                  <Image
                    src={item.user}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black uppercase tracking-widest text-white">{item.name}</span>
                  <span className="text-[10px] font-bold text-brand uppercase tracking-widest">{item.date}</span>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < item.rating ? "fill-brand text-brand" : "text-white/10"}
                  />
                ))}
              </div>
            </div>

            <p className="text-base md:text-lg text-white/80 font-medium leading-relaxed italic whitespace-normal line-clamp-3">
              &quot;{item.comment}&quot;
            </p>

            <div className="absolute bottom-6 right-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.34315 15.3602 2 17.017 2H19.017C20.6739 2 22.017 3.34315 22.017 5V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01691 21L2.01691 18C2.01691 16.8954 2.91234 16 4.01691 16H7.01691C7.56919 16 8.01691 15.5523 8.01691 15V9C8.01691 8.44772 7.56919 8 7.01691 8H4.01691C2.91234 8 2.01691 7.10457 2.01691 6V5C2.01691 3.34315 3.36005 2 5.01691 2H7.01691C8.67376 2 10.0169 3.34315 10.0169 5V15C10.0169 18.3137 7.33062 21 4.01691 21H2.01691Z" /></svg>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const FeedbackSection = () => {
  const firstRow = feedback.slice(0, 4);
  const secondRow = feedback.slice(4, 8);

  return (
    <section
      id="feedback"
      className="w-full py-32 bg-black relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 mb-20 text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-black tracking-[0.4em] uppercase text-xs"
          >
            Street Proof
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic"
          >
            Real <span className="text-brand">DRILLERS</span> <br />
            <span className="text-white/20">Real Feedback</span>
          </motion.h2>
          <div className="h-1 w-24 bg-brand mx-auto rounded-full" />
        </div>

        {/* Marquee Rows */}
        <div className="flex flex-col gap-4 w-full">
          <MarqueeRow items={firstRow} speed={40} />
          <MarqueeRow items={secondRow} reverse speed={50} />
        </div>

        <div className="container mx-auto px-6 mt-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="glass-card py-4 px-8 rounded-full border-brand/20 flex items-center gap-6"
          >
            <div className="flex -space-x-4">
              {feedback.slice(0, 5).map((item, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-zinc-800">
                  <Image src={item.user} alt="user" fill className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm font-black uppercase tracking-widest text-white">
              Joined by <span className="text-brand">2000+</span> Customers Morocco-wide
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
