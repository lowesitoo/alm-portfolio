const Testimonials = () => {
  const testimonials = [
    {
      name: "Kent Adrian Robledo",
      feedback:
        "Luis provided outstanding support and solved my network issues quickly and professionally!",
    },
    {
      name: "Dave Greenblatt",
      feedback:
        "Luis's expertise in troubleshooting saved us countless hours. His dedication and skills are unmatched.",
    },
    {
      name: "Nick Vogt",
      feedback:
        "I highly recommend Luis for any IT-related challenges. He’s reliable, skilled, and a pleasure to work with.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 dark:text-black"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Adjusted font size for "Testimonials" heading */}
        <h2 className="text-4xl sm:text-4xl font-extrabold text-green-400 mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition dark:bg-gray-200 dark:shadow-md dark:hover:shadow-lg"
            >
              <div className="h-24 flex items-center justify-center">
                <p className="italic font-semibold text-sm sm:text-base text-gray-300 dark:text-gray-700">
                  {testimonial.feedback}
                </p>
              </div>
              <p className="mt-4 font-extrabold text-green-400 text-base sm:text-lg">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
