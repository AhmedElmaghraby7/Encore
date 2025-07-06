import React from "react";

const Terms = () => {
  return (
    <div className="bg-white text-black pt-20 px-6 max-w-3xl mx-auto ">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>

      <section className="mb-2">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          By accessing and using the Encore website, you agree to be bound by these terms.
        </p>
      </section>

      <section className="mb-2">
        <h2 className="text-xl font-semibold mb-2">2. Use of Service</h2>
        <p>
          You may not misuse our services or attempt to access them in unauthorized ways.
        </p>
      </section>

      <section className="mb-2">
        <h2 className="text-xl font-semibold mb-2">3. Purchases</h2>
        <p>
          All purchases are subject to availability and Encore reserves the right to adjust prices or discontinue items.
        </p>
      </section>

      <section className="mb-2">
        <h2 className="text-xl font-semibold mb-2">4. Privacy</h2>
        <p>
          We respect your privacy and handle your data according to our Privacy Policy.
        </p>
      </section>

      <p className="text-sm text-gray-600 mt-10">
        Last updated: June 2025
      </p>
    </div>
  );
};

export default Terms;
