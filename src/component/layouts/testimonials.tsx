import React, { useState } from "react";
import { StarIcon } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Lindsy Niloms",
    image: "assets/testimonial-1.png",
    feedback:
      "Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque dolor sit amet, consectetur adipiscing elit. Donec veh",
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "assets/testimonial-2.png",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, urna non dolor sit amet, consectetur adipiscing elit. Donec veh",
  },
  {
    id: 3,
    name: "Emily Clark",
    image: "assets/testimonial-3.png",
    feedback:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam dolor sit amet, consectetur adipiscing elit. Donec veh",
  },
  {
    id: 4,
    name: "Emily Clark",
    image: "assets/user.png",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae fugiat iure, distinctio eligendi nam maiores numquam rerum et nostrum.",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const getVisibleTestimonials = () => {
    if (testimonials.length <= 3) {
      return testimonials;
    }

    const prevIndex =
      (activeIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (activeIndex + 1) % testimonials.length;

    return [
      testimonials[prevIndex],
      testimonials[activeIndex],
      testimonials[nextIndex],
    ];
  };

  return (
    <div className="flex flex-col items-center p-10 rounded-lg w-[70%] m-auto">
      <h2 className="text-3xl font-medium">Testimonials</h2>
      <p className="text-sm text-gray-500 pb-12 pt-2">What they say</p>

      <div className="flex justify-center items-center space-x-4 overflow-hidden w-full relative">
        {getVisibleTestimonials().map((testimonial, index) => {
          const isActive = index === 1;
          const slideInClass = isActive ? "translate-x-0" : "translate-x-[5%]";
          const slideOutClass = isActive ? "-translate-x-[5%]" : "";

          return (
            <div
              key={testimonial.id}
              className={`transition-transform duration-500 ease-in-out cursor-pointer ${slideInClass}${slideOutClass}`}
              onClick={() => handleClick(testimonials.indexOf(testimonial))}
            >
              <Avatar
                className={`w-14 h-14 ${
                  isActive
                    ? `scale-110 w-20 h-20 transition-transform duration-150 ease-in-out m-2 transform `
                    : ""
                }`}
              >
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
              </Avatar>
            </div>
          );
        })}
      </div>

      <div
        className={`transition-transform duration-500 ease-in-out text-center mt-12`}
      >
        <p
          className={`transition-transform duration-500 ease-in-out text-gray-600`}
        >
          {testimonials[activeIndex].feedback}
        </p>
        <div className="flex justify-center mt-6 gap-1">
          {[...Array(5)].map((_, index) => (
            <StarIcon size={18} key={index} className="text-yellow-400" />
          ))}
        </div>
        <p className="font-semibold text-lg pt-1">
          {testimonials[activeIndex].name}
        </p>
      </div>
    </div>
  );
}
