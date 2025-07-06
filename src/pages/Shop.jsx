import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const mainMeals = [
    { name: "Grilled Salmon with Veggies", price: 24, img: "/Grilled Salmon with Veggies.jpg" },
    { name: "Lemon Herb Chicken", price: 22, img: "/Lemon Herb Chicken.jpg" },
    { name: "Roasted Veggie Paella", price: 21, img: "/Roasted Veggie Paella.jpeg" },
    { name: "Eggplant Lasagna", price: 21, img: "/Eggplant Lasagna.jpg" },
    { name: "Grilled Tofu with Wild Rice", price: 20, img: "/Grilled Tofu with Wild Rice.jpeg" },
    { name: "Vegan Sushi Rolls", price: 20, img: "/Vegan Sushi Rolls.jpg" },
    { name: "Lentil Stuffed Eggplant", price: 19, img: "/Lentil Stuffed Eggplant.jpg" },
    { name: "Stuffed Bell Peppers", price: 19, img: "/Stuffed Bell pappers.jpeg" },
    { name: "Zucchini Risotto", price: 18, img: "/Zucchini Risotto.jpg" },
    { name: "Mushroom Tofu Stir-fry", price: 18, img: "/Mushroom Tofu Stir-fry.jpg" },
    { name: "Sweet Potato Noodles", price: 17, img: "/Sweet Potato Noodles.jpg" },
    { name: "Herbed Couscous Bowl", price: 16, img: "/Herbed Couscous Bowl.webp" },
];
const Salads = [
    { name: "Avocado Quinoa Salad", price: 16, img: "/Avocado Quinoa Salad.jpg" },
    { name: "Kale Caesar Salad", price: 14, img: "/Kale Caesar Salad.jpg" },
    { name: "Truffle Cauliflower Soup", price: 15, img: "/Truffle Cauliflower Soup.png" },
    { name: "Mango Chia Pudding", price: 12, img: "/Mango Chia Pudding.jpg" },
]
const Drinks = [
    { name: "Tropical Green Juice", price: 10, img: "/Tropical Green Juice.jpg" },
    { name: "Citrus Sparkling Tea", price: 9, img: "/Citrus Sparkling Tea.webp" },
    { name: "Mint Cucumber Cooler", price: 8, img: "/Mint Cucumber Cooler.jpg" },
    { name: "Berry Detox Water", price: 7, img: "/Berry Detox Water.jpeg" }]

const platters = [
    {
        name: "Seafood Delight Tray",
        price: 75,
        img: "/family5.jpg",
        description: "Grilled salmon, shrimp skewers, lemon rice, and veggie medley. Serves 5."
    },
    {
        name: "Encore Feast Special",
        price: 70,
        img: "/family2.jpg",
        description: "Includes lemon herb chicken, truffle soup, mini risottos, and a dessert tray — perfect for two couples."
    },
    {
        name: "Middle Eastern Banquet",
        price: 68,
        img: "/family6.webp",
        description: "Stuffed grape leaves, lamb kofta, baba ghanoush, rice, and salad. Serves 4–6."
    },
    {
        name: "Family Mediterranean Platter",
        price: 60,
        img: "/family.png",
        description: "A delicious spread of grilled chicken, hummus, tabbouleh, roasted veggies, and low-carb flatbread. Serves 4."
    },
    {
        name: "Vegan Celebration Tray",
        price: 55,
        img: "/family1.webp",
        description: "A colorful mix of plant-based dishes: quinoa salad, roasted tofu, beet hummus, falafel, and grilled vegetables. Serves 4–5."
    },
    {
        name: "Encore Signature Combo",
        price: 42,
        img: "/family4.jpg",
        description: "Lemon Herb Chicken, Truffle Cauliflower Soup & Vegan Sushi. Elegant & healthy."
    },
    {
        name: "Lite Duo Combo",
        price: 30,
        img: "/family3.png",
        description: "Zucchini Risotto + Mango Chia Pudding. Perfect balance of savory and sweet."
    },
];

const Shop = () => {
    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("update"));
        toast.success(`${product.name} added to cart 🛒 ✅`);
    };


    return (
        <div className="bg-white text-black py-16 px-6 mt-10">
            <h1 className="text-4xl font-bold mb-8 text-center">Shop Our Meals</h1>
            <div className="flex flex-wrap justify-center gap-8 mx-auto my-10 py-16 px-6 rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-center">
                <h1 className="w-full text-4xl font-bold text-center">Main Meals</h1>
                {mainMeals.map((meal, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 shadow-lg p-6 rounded-xl w-70 hover:scale-105 transition"
                    >
                        <img src={meal.img} className=" h-80 w-full bg-gray-200 mb-4 rounded-lg"></img>
                        <h2 className="text-lg font-semibold">{meal.name}</h2>
                        <p className="text-gray-600">${meal.price}</p>
                        <button
                            onClick={() => { addToCart(meal) }}
                            className="group hover:scale-110 mt-4 bg-black cursor-pointer text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                            Add to Cart <i className="fa-solid fa-cart-shopping duration-100 group-hover:text-red-500"></i>
                        </button>
                    </div>
                ))}
                <h1 className="w-full text-4xl font-bold text-center">Salads & Light Dishes</h1>
                {Salads.map((meal, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 shadow-lg p-6 rounded-xl w-70 hover:scale-105 transition"
                    >
                        <img src={meal.img} className=" h-80 w-full bg-gray-200 mb-4 rounded-lg"></img>
                        <h2 className="text-lg font-semibold">{meal.name}</h2>
                        <p className="text-gray-600">${meal.price}</p>
                        <button
                            onClick={() => { addToCart(meal) }}
                            className="group hover:scale-110 mt-4 bg-black cursor-pointer text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                            Add to Cart <i className="fa-solid fa-cart-shopping duration-100 group-hover:text-red-500"></i>
                        </button>
                    </div>
                ))}
                <h1 className="w-full text-4xl font-bold text-center my-5">Drinks</h1>
                {Drinks.map((meal, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 shadow-lg p-6 rounded-xl w-70 hover:scale-105 transition"
                    >
                        <img src={meal.img} className=" h-80 w-full bg-gray-200 mb-4 rounded-lg"></img>
                        <h2 className="text-lg font-semibold">{meal.name}</h2>
                        <p className="text-gray-600">${meal.price}</p>
                        <button
                            onClick={() => { addToCart(meal) }}
                            className="group hover:scale-110 mt-4 bg-black cursor-pointer text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                            Add to Cart <i className="fa-solid fa-cart-shopping duration-100 group-hover:text-red-500"></i>
                        </button>
                    </div>
                ))}
            </div>
            <section className="mx-auto my-10 py-16 px-6 rounded-xl bg-gradient-to-br md:w-3/4 from-blue-50 via-purple-50 to-pink-50 text-center">
                <h2 className="text-3xl font-bold text-black mb-8">Sharing Platters</h2>
                <div className="grid grid-cols-1 gap-8">
                    {platters.map((platter, index) => (
                        <div key={index} className={` flex ${index % 2 === 1 ? "flex-row-reverse" : ""} flex-wrap  p-4  transition`}>
                            <img
                                src={platter.img}
                                alt={platter.name}
                                className=" h-75 xl:max-w-2/3 w-full object-cover rounded-lg mb-4"
                            />
                            <div className="text-left flex-1 min-w-55 p-4 mx-auto my-auto">
                                <h3 className="text-xl font-semibold">{platter.name}</h3>
                                <p className="text-gray-500 text-sm mb-2">{platter.description}</p>
                                <p className="text-gray-800 font-semibold">${platter.price}</p>
                                <button
                                    onClick={() => { addToCart(platter) }}
                                    className="group hover:scale-110 mt-4 mx-auto block bg-black cursor-pointer text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                                    Add to Cart <i className="fa-solid fa-cart-shopping duration-100 group-hover:text-red-500"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="mt-6 text-center">
                <Link to="/cart" className="duration-300 hover:px-8  text-gray-50 bg-blue-500 hover:bg-blue-700 rounded py-3 px-5">
                    <span className="text-xl">Go to cart </span> <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    );
};

export default Shop;
