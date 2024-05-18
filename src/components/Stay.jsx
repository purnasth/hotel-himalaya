// import React, { useState } from "react";
// import RoomSlider from "./ui/RoomSlider";
// import {
//   HiOutlineArrowLongLeft,
//   HiOutlineArrowLongRight,
// } from "react-icons/hi2";

// const items = [
//   {
//     image: "https://mayurstay.com/hotelhimalaya/images/subpackage/9Lgh2-1.jpg",
//     title: "Junior Suite",
//     description:
//       "Our most spacious room category, the Junior Suites boast of plush beds with finest linen, sufficient working space, comfortable lounge area and en-suite bathrooms featuring bathtub. All these ‘suites’ are situated in the extreme corners of the floors for its quietness, offering windows on two sides with the views of lush green landscaped gardens on one side and city as well as Himalayas on the other. The most opulent rooms that we offer, you won’t wish to leave once you’ve stepped inside.",
//   },
//   {
//     image: "https://mayurstay.com/hotelhimalaya/images/subpackage/XMHzg-2.jpg",
//     title: "Executive Room",
//     description:
//       "Our newly built Executive Floor commands the best view of the Kathmandu valley. These well-appointed rooms on the 5th floor offer spectacular views of the city and mountains on the horizon. The large windows create an enclosed balcony where you can soak up the sun and marvel at the city below and mountains beyond. The stylish en-suite bathrooms feature rain showers and the room comes equipped with everything the business or leisure traveler might have in mind.",
//   },
//   {
//     image: "https://mayurstay.com/hotelhimalaya/images/subpackage/lMLoI-4.jpg",
//     title: "Deluxe Room",
//     description:
//       "We offer deluxe room with king size bed and well equipped with all the facilities and equipments you need for a comfortable stay. Spend quality time in our room fulfilled with a luxurious bathroom along with view of mountains and city. Spend your leisure time and make your stay a memorable stay. Feel like home and away in a silent environment.",
//   },
//   {
//     image:
//       "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/Q3Wun-room2.jpg",
//     title: "Twin Room",
//     description: "Description for Room 4",
//   },
// ];

// const Stay = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevClick = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const handleNextClick = () => {
//     if (currentIndex < items.length - 3) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   return (
//     <main className="px-0">
//       <div className="container pb-24">
//         <div className="flex items-center justify-between gap-8">
//           <div className="space-y-2">
//             <span className="uppercase">125 Well Appointed Rooms</span>
//             <h3 className="text-5xl leading-snug">Boutique Accommodation</h3>
//             <p className="text-base">
//               In a realm where tranquility and beauty intertwine, find yourself
//               nestled in the embrace of an enchanting haven.
//             </p>
//           </div>

//           <div className="flex items-center gap-2">
//             <button
//               className="bg-gradient py-1 px-5 rounded-full"
//               onClick={handlePrevClick}
//               disabled={currentIndex === 0}
//             >
//               <HiOutlineArrowLongLeft className="text-lg" />
//             </button>
//             <button
//               className="bg-gradient py-1 px-5 rounded-full"
//               onClick={handleNextClick}
//               disabled={currentIndex >= items.length - 3}
//             >
//               <HiOutlineArrowLongRight className="text-lg" />
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="translate-x-36">
//         <RoomSlider
//           items={items}
//           currentIndex={currentIndex}
//           handlePrevClick={handlePrevClick}
//           handleNextClick={handleNextClick}
//         />
//       </div>
//     </main>
//   );
// };

// export default Stay;

import React, { useState, useEffect } from "react";
import RoomSlider from "./ui/RoomSlider";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const items = [
  {
    image: "https://mayurstay.com/hotelhimalaya/images/subpackage/9Lgh2-1.jpg",
    title: "Junior Suite",
    description:
      "Our most spacious room category, the Junior Suites boast of plush beds with finest linen, sufficient working space, comfortable lounge area and en-suite bathrooms featuring bathtub. All these ‘suites’ are situated in the extreme corners of the floors for its quietness, offering windows on two sides with the views of lush green landscaped gardens on one side and city as well as Himalayas on the other. The most opulent rooms that we offer, you won’t wish to leave once you’ve stepped inside.",
    size: "18 ft. by 18 ft. - 324 sq. ft.",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/652f/d1ff/51c5b431e1e513c1711258b59200170e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p99cPVqMsnroCGN-LwN4qwKKseumgKpYj1oX~hZzOGPRUr1MOgP7BCklnDTj9ABOLf1MQ4DIZrDY4FQ3ZvBamDfqqYdAoEjxBtKElTz4pq4Vqb9yr7c9hh2dBYPKqFmzqc5xMVH-Cwsm9Sg3KXuSEzQwnN2mc0cOjTxoE2VE7xeo3NMte1JBFuCVFk3FbwKTqaoCBjyntTgFZRhr9Q1wy3IxuR7kRpbvLROcYXQy6sco0tKzVbYAJR3nfmnuYPyfiQWAepYVkzs62~PgwiGGhkiAdh-xGHJ8gfpETzjgIINcLEyP7YEMjUZFHjJ23uT8wahEaUKC69Ea7WoGA6DTKQ__",
    title: "Executive Room",
    description:
      "Our newly built Executive Floor commands the best view of the Kathmandu valley. These well-appointed rooms on the 5th floor offer spectacular views of the city and mountains on the horizon. The large windows create an enclosed balcony where you can soak up the sun and marvel at the city below and mountains beyond. The stylish en-suite bathrooms feature rain showers and the room comes equipped with everything the business or leisure traveler might have in mind.",
    size: "18 ft. 12 ft. - 216 sq. ft.",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/9aa8/5155/85bd92c071f86d85d5fcb8c41873dcac?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wg4qzgKE9bJLALaCw4pNdQBiImQTNUiWvpskZM7fClvWja5YjWinr1QaGRKIKHRpcklC84BN8TkhmPLZYG7d9hF5IX4JhLX3vLa-BdzKPmlao3z-SfPEGGib-0adLov0b7hvCXRxyyW3yJbRzyg4jZEfoC2SBYd4DRqbWumtA7gmNFAnefzsvl6mgbdpcee4FDmmXnWOjvrsqeo1kEw5qbqpw3woYvOa8ae9ojT6YkcOLRnO9p8XCTk25xlduFzEcYryaR5uRoEt0W6xMKWAcHCLKB1kHAvgu4DRQiibhv9QFQKWOM~PU6RIwx8lS0ZT6QvycD-IcQvrFEyLn5oO0w__",
    title: "Deluxe Room",
    description:
      "We offer deluxe room with king size bed and well equipped with all the facilities and equipments you need for a comfortable stay. Spend quality time in our room fulfilled with a luxurious bathroom along with view of mountains and city. Spend your leisure time and make your stay a memorable stay. Feel like home and away in a silent environment.",
    size: "15 ft. 12 ft. by 6 inch - 189 sq. ft.",
  },
];

const Stay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="px-0">
      <div className="container pb-16">
        <div className="flex items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="uppercase">125 Well Appointed Rooms</span>
            <h3 className="text-5xl leading-snug">Boutique Accommodation</h3>
            <p className="text-base">
              In a realm where tranquility and beauty intertwine, find yourself
              nestled in the embrace of an enchanting haven.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="bg-gradient py-1 px-5 rounded-full hover-outline"
              onClick={handlePrevClick}
            >
              <HiOutlineArrowLongLeft className="text-lg" />
            </button>
            <button
              className="bg-gradient py-1 px-5 rounded-full hover-outline"
              onClick={handleNextClick}
            >
              <HiOutlineArrowLongRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
      <div className="translate-x-36">
        <RoomSlider items={items} currentIndex={currentIndex} />
      </div>
    </main>
  );
};

export default Stay;
