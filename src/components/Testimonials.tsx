import { testimonialList } from "../constants";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-sxl sm:text-4xl mb-2 font-bold text-center">
        Customers
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center mx-auto text-gray-500 mb-12 max-w-80">
        Real experiences from people who found their home with us
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialList.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[320px] shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <img
                  key={index}
                  src="/icons/star-icon.svg"
                  alt="rating icon"
                  className="w-5 h-5"
                />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export { Testimonials };
