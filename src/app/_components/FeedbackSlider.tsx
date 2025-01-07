import { feedback } from "@/data/drillShopData";
import Image from "next/image";
import Slider from "react-slick";

const FeedbackSection = () => {

 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
      };
    
      return (
        <section
          id="feedback"
          className="w-full py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900"
        >
          <h2 className="text-5xl font-bold text-center text-gray-800 dark:text-white mb-12">
            What Our Customers Say
          </h2>
          <Slider {...settings} className="max-w-3xl mx-auto">
            {feedback.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-8 flex flex-col  text-center mx-6 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="w-24 h-24 mb-6">
                  <Image
                    src={item.user}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full shadow-md"
                  />
                </div>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-6">
                  {item.comment}
                </p>
                <div className="text-yellow-400 flex mb-6">
                  {Array(item.rating)
                    .fill(0)
                    .map((_, index) => (
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
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  - {item.name}, {item.date}
                </p>
              </div>
            ))}
          </Slider>
        </section>
    
  );
};

export default FeedbackSection;
