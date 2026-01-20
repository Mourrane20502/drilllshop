import { feedback } from "@/data/drillShopData";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";

const FeedbackSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    dotsClass: "slick-dots custom-dots-feedback",
  };

  return (
    <section
      id="feedback"
      className="w-full py-32 bg-zinc-50 dark:bg-zinc-950 px-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[150px] rounded-full"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-center text-zinc-900 dark:text-white tracking-tighter">
            VOICES OF THE <span className="text-brand">STREET</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {feedback.map((item) => (
              <div key={item.id} className="outline-none py-10 px-4">
                <div className="relative bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[3rem] p-8 md:p-16 flex flex-col items-center text-center shadow-2xl transition-all duration-500">
                  <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl">
                    <Image
                      src={item.user}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-8 mb-6">
                    <div className="flex justify-center gap-1.5 mb-8">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-brand fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.431 8.2 1.19-5.917 5.768 1.396 8.176L12 18.896 4.653 23.152l1.396-8.176-5.917-5.768 8.2-1.19z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-xl md:text-3xl font-medium text-zinc-700 dark:text-zinc-200 leading-snug tracking-tight italic">
                      &ldquo;{item.comment}&rdquo;
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <span className="text-lg font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                      {item.name}
                    </span>
                    <span className="text-sm font-bold text-brand uppercase tracking-widest">
                      {item.date}
                    </span>
                  </div>

                  {/* Quote Icon Decoration */}
                  <div className="absolute bottom-8 right-12 opacity-5 dark:opacity-10 pointer-events-none">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.34315 15.3602 2 17.017 2H19.017C20.6739 2 22.017 3.34315 22.017 5V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01691 21L2.01691 18C2.01691 16.8954 2.91234 16 4.01691 16H7.01691C7.56919 16 8.01691 15.5523 8.01691 15V9C8.01691 8.44772 7.56919 8 7.01691 8H4.01691C2.91234 8 2.01691 7.10457 2.01691 6V5C2.01691 3.34315 3.36005 2 5.01691 2H7.01691C8.67376 2 10.0169 3.34315 10.0169 5V15C10.0169 18.3137 7.33062 21 4.01691 21H2.01691Z" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .custom-dots-feedback {
          bottom: -20px !important;
        }
        .custom-dots-feedback li button:before {
          content: '' !important;
          width: 8px !important;
          height: 8px !important;
          background: #e4e4e7 !important;
          border-radius: 50% !important;
          opacity: 1 !important;
        }
        .dark .custom-dots-feedback li button:before {
          background: #3f3f46 !important;
        }
        .custom-dots-feedback li.slick-active button:before {
          background: #F80312 !important;
          width: 24px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default FeedbackSection;
