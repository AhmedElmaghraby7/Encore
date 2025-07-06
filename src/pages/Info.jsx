import React from "react";

const Info = () => {
  return (
    <div className="bg-white text-black py-20 px-6 w-full">
      <h1 className="text-4xl font-bold mb-8 text-center">About Encore</h1>
      <div className="max-w-4xl mx-auto space-y-10 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
          <p>
            Encore was born from the desire to blend gourmet cuisine with a healthy lifestyle.
            Our meals are crafted by top chefs and designed to bring elegance and wellness to every home.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Why Low-Calorie?</h2>
          <p>
            We believe food should be both delicious and nourishing. Our low-calorie dishes help
            maintain a balanced lifestyle without sacrificing taste or experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Chef Collaborations</h2>
          <p>
            We partner with Michelin-starred chefs to create exclusive menus that
            reflect sophistication and innovation in healthy eating.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Who We Serve</h2>
          <p>
            Our products are designed especially for couples who want to share meals
            that feel luxurious and loving — without the guilt.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Info;
