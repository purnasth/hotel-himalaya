import React from "react";
import TestimonialFilter from "./ui/TestimonialFilter";

const Testimonials = () => {
  const testimonialContents = [
    {
      id: "testimonialSection",
      subheading: "Making 10,000+ happy faces",
      title: "Valued Guest Feedbacks",
      description:
        "We are proud to have received positive feedback from our guests. Here are some of the testimonials from our valued guests.",
      contents: [
        {
          id: 1,
          title: "Tim",
          description:
            "The location is excellent for tourist visits to Kathmandu. That is, it is relaxing place away from noise of Tourist locations but easy access to touring. Going out for tour days and returning in the afternoon to relax and refresh is better than stays in tourist places.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg",
          source: "Booking.com",
        },
        {
          id: 2,
          title: "Karla B",
          description:
            "Me and my husband stayed 3 nights at Hotel Himalaya. Great location! Just 5 min walk to Patan Durban Square. The deluxe room was big with a super comfortable bed. Great laundry service available. Breakfast buffet was delicious. Dinner restaurant was great!!! Service was 100 points. The only “bad” think was that the wifi was only available at the lobby, not in the room.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/0/02/TripAdvisor_Logo.svg",
          source: "TripAdvisor",
        },
        {
          id: 3,
          title: "Yogesh",
          description:
            "Himalaya Hotel is my most favoured place to stay when I arrive at Kathmandu for various reasons. First, it's one of the cleanest property around, with great ambience - including clean rooms, toilets and swimming pool. Secondly, the staff is extremely polite and helpful. They are always so homecoming and supportive. They will talk to you and connect on a personal level - be it the security staff at gate or restaurant staff or reception. Food is excellent, the breakfast has a lot of varieties.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/3/3b/Expedia_Logo_2023.svg",
          source: "Expedia",
        },
        {
          id: 4,
          title: "Siam Hussain",
          description:
            "A beautiful quaint hotel located a little bit away from the heart of Kathmandu. A little bit pricy compared to the other options nearby but is definitely worth it. The hotel has a nice pool and a lounge area as well. Perhaps the best thing about the hotel is the customer service. The staff were extremely polite, cordial and helpful during my visit.",
          image:
            "https://logos-world.net/wp-content/uploads/2023/12/Google-Review-Emblem.png",
          source: "Google Reviews",
        },
      ],
    },
  ];

  const { subheading, title, description } = testimonialContents[0];

  return (
    <main id="testimonials">
      <div className="container">
        <div className="text-center space-y-6 px-24 mb-12">
          <span className="uppercase">{subheading}</span>
          <h3 className="text-5xl leading-snug">{title}</h3>
          <p className="text-base max-w-lg mx-auto">{description}</p>
        </div>
        <TestimonialFilter contents={testimonialContents[0].contents} />
      </div>
    </main>
  );
};

export default Testimonials;
