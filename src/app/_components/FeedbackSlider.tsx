// // components/FeedbackSlider.tsx
// import { feedback } from '@/data/drillShopData';
// import React from 'react';
// import Slider from 'react-slick';

// const FeedbackSlider: React.FC = () => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//   };

//   return (
//     <div className="flex items-center justify-center py-12">
//       <div className="max-w-4xl w-full">
//         <Slider {...settings}>
//           {feedback.map((item) => (
//             <div
//               key={item.id}
//               className="feedback-item bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
//             >
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
//                 <p className="text-gray-600 mt-2">{item.comment}</p>
//                 <div className="mt-4">
//                   {/* Display star ratings */}
//                   <span className="text-yellow-400">{'⭐'.repeat(item.rating)}</span>
//                 </div>
//                 <p className="text-sm text-gray-400 mt-2">{item.date}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default FeedbackSlider;
