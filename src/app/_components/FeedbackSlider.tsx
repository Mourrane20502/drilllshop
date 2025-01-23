import { feedback } from "@/data/drillShopData";
import Image from "next/image";
import Slider from "react-slick";

const FeedbackSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true, // Smooth transition effect
    adaptiveHeight: true, // Adjust height dynamically
  };

  return (
    <section
      id="feedback"
      className="w-full py-20 bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 px-6"
    >
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-14 tracking-wide">
        What Our Customers Say
      </h2>

      {/* Feedback Slider */}
      <div className="max-w-4xl mx-auto pb-2">
        <Slider {...settings} className="pb-3">
          {feedback.map((item) => (
            <div key={item.id} className="px-6">
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-10 flex flex-col items-center text-center transition-all duration-500 ease-in-out pb-8 ">
                {/* Profil Picture */}
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-indigo-500 dark:border-gray-600 shadow-lg mb-6">
                  <Image
                    src={item.user}
                    alt={item.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Comment */}
                <p className="text-xl font-medium text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl">
                  “{item.comment}”
                </p>

                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mt-5 text-yellow-400">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431 8.2 1.19-5.917 5.768 1.396 8.176L12 18.896 4.653 23.152l1.396-8.176-5.917-5.768 8.2-1.19z" />
                    </svg>
                  ))}
                </div>

                {/* Name & Date */}
                <p className="mt-5 text-lg text-gray-500 dark:text-gray-400 italic">
                  - {item.name}, {item.date}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeedbackSection;
