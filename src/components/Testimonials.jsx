import React, { useState } from "react";

const Testimonials = () => {
  const testimonialContents = [
    {
      id: "testimonialSection",
      title: "",
      subtitle: "",
      subheading:
        "",
      description:
        "",
      testimonials: [
        {
          id: 1,
          content:
            "The location is excellent for tourist visits to Kathmandu. That is, it is relaxing place away from noise of Tourist locations but easy access to touring. Going out for tour days and returning in the afternoon to relax and refresh is better than stays in tourist places.",
          author: "Tim",
          country: "USA",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg",
          source: "Booking.com",
        },
        {
          id: 2,
          content:
            "Me and my husband stayed 3 nights at Hotel Himalaya. Great location! Just 5 min walk to Patan Durban Square. The deluxe room was big with a super comfortable bed. Great laundry service available. Breakfast buffet was delicious. Dinner restaurant was great!!! Service was 100 points. The only “bad” think was that the wifi was only available at the lobby, not in the room.",
          author: "Karla B",
          country: "Florida, USA",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/0/02/TripAdvisor_Logo.svg",
          source: "TripAdvisor",
        },
        {
          id: 3,
          content:
            "Himalaya Hotel is my most favoured place to stay when I arrive at Kathmandu for various reasons. First, it's one of the cleanest property around, with great ambience - including clean rooms, toilets and swimming pool. Secondly, the staff is extremely polite and helpful. They are always so homecoming and supportive. They will talk to you and connect on a personal level - be it the security staff at gate or restaurant staff or reception. Food is excellent, the breakfast has a lot of varieties.",
          author: "Yogesh",
          country: "Nepal",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/3/3b/Expedia_Logo_2023.svg",
          source: "Expedia",
        },
        {
          id: 4,
          content:
            "A beautiful quaint hotel located a little bit away from the heart of Kathmandu. A little bit pricy compared to the other options nearby but is definitely worth it. The hotel has a nice pool and a lounge area as well. Perhaps the best thing about the hotel is the customer service. The staff were extremely polite, cordial and helpful during my visit.",
          author: "Siam Hussain",
          country: "Bangladesh",
          image:
            "https://logos-world.net/wp-content/uploads/2023/12/Google-Review-Emblem.png",
          source: "Google Reviews",
        },
      ],
    },
  ];
  const [selectedPerson, setSelectedPerson] = useState(
    testimonialContents[0].testimonials[0].author
  );
  const [isVisible, setIsVisible] = useState(true);

  const handlePersonClick = (person) => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedPerson(person);
      setIsVisible(true);
      // Scroll to the display section
      const displaySection = document.getElementById("testimonials-display");
      if (displaySection) {
        displaySection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 400);
  };

  return (
    <main id="testimonials">
      <div className="container">
        <div className="text-center space-y-6 px-24 mb-12">
          <span className="uppercase">Making 10,000+ happy faces</span>
          <h3 className="text-5xl leading-snug">Valued Guest Feedbacks</h3>
          <p className="text-base max-w-lg mx-auto">
            We are proud to have received positive feedback from our guests.
            Here are some of the testimonials from our valued guests.
          </p>
        </div>
        <div className="flex flex-col gap-24">
          <div className="sticky top-0 flex justify-between flex-nowrap gap-12 max-w-full overflow-x-auto p-8 z-20">
            {testimonialContents[0].testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => handlePersonClick(testimonial.author)}
                className={`w-64 rounded-full cursor-pointer transition-all duration-400 ease-linear border-[1px] border-black/10 ${
                  selectedPerson === testimonial.author
                    ? "bg-gradient hover-outline"
                    : ""
                }`}
                title={testimonial.author}
                aria-label={testimonial.author}
              >
                <div className="flex items-center justify-between px-4 w-56">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-auto h-9 object-contain p-2"
                  />
                  <p className="text-sm md:text-base line-clamp-1">
                    - {testimonial.author}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <div className="w-full max-h-96 overflow-y-auto">
            <div
              id="testimonials-display"
              className={`px-4 ${
                isVisible
                  ? "scale-100 translate-y-0"
                  : "scale-0 -translate-y-full"
              } transition-all duration-700 scroll-mt-0 md:scroll-mt-80`}
            >
              {testimonialContents[0].testimonials
                .filter((testimonial) => testimonial.author === selectedPerson)
                .map((testimonial) => (
                  <div key={testimonial.id} className="md:px-6">
                    <p className="text-justify md:text-pretty text-xl">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center justify-between gap-12 mt-12">
                      <p className="text-base md:text-xl font-medium">
                        - {testimonial.author}
                      </p>
                      <p className="text-sm md:text-base">
                        - via {testimonial.source}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
