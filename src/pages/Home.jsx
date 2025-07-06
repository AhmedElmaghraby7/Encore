import React from "react";

const Home = () => {
  const chefs = [
    { name: "Chef David", img: "/chef1.jpg" },
    { name: "Chef Mark", img: "/chef.jpg" },
    { name: "Chef Jeff", img: "/chef2.jpg" },
  ];

  const assistants = [
    { name: "Marya John", role: "Sous Chef", img:"/chef-A1.jpg" },
    { name: "James Carter", role: "Nutrition Assistant",img:"/chef-A.jpg" },
    { name: "Magy Rick", role: "Pastry Prep Chef",img:"/chef-A2.avif" },
  ];

  return (
    <div className="bg-white text-black w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-25 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Taste Glamour, Eat Light
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Encore brings low-calorie luxury meals crafted by world-renowned chefs — served in 5-star restaurants, now brought to your home.
        </p>
      </section>

      {/* About the Team */}
      <section className="py-16 px-6 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Meet Our Team</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-10">
          Our team includes Michelin-starred chefs, nutritionists, and culinary artists who blend flavor with health.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-lg p-6 rounded-xl w-70 hover:scale-105 transition"
            >
              <img src={chef.img} className=" h-80 w-full bg-gray-200 mb-4 rounded-lg"></img>
              <h3 className="text-xl font-semibold">{chef.name}</h3>
              <p className="text-gray-500 text-sm">Head Chef</p>
            </div>
          ))}
        </div>
      </section>

      {/* Assistant Chefs Section */}
      <section className="py-16 px-6 bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 text-center">
        <h2 className="text-2xl font-bold text-black mb-6">Our Culinary Assistants</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-10">
          Supporting our top chefs, our assistants ensure precision and care in every step of preparation.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {assistants.map((assistant, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl shadow-lg w-64 hover:scale-105 transition"
            >
              <img
                src={assistant.img}
                alt={assistant.name}
                className=" h-80 w-full bg-gray-200 mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold">{assistant.name}</h3>
              <p className="text-gray-500 text-sm">{assistant.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA - Social Media */}
      <section className="py-14 bg-yellow-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
        <p className="mb-6 text-gray-700">
          Follow us for tips, recipes, and exclusive promotions.
        </p>
        <a
          href="#"
          className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-pink-300 hover:text-black transition"
        >
          Follow Encore on Instagram
        </a>
      </section>
    </div>
  );
};

export default Home;
