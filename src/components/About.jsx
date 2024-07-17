import React from "react";
import QuranImage from "../assets/quran-learning.jpg";

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-orange-500 font-semibold mb-2">How It Started</h2>
          <h1 className="text-4xl font-bold mb-4">
            Our Dream is Quran Learning Transformation
          </h1>
          <p className="mb-4">
            Our platform was founded with the mission to make the teachings of
            the Holy Quran accessible to all. We believe that understanding the
            Quran can transform lives and guide mankind to the right path. With
            dedication and commitment, we aim to provide high-quality Quranic
            education to everyone.
          </p>
          <p>
            We offer a wide range of resources including Tafsir, translations,
            and recitations, making it easier for everyone to learn and
            understand the Quran. Our dedicated team is committed to supporting
            your journey of Quranic learning and spiritual growth.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={QuranImage}
            alt="Quran Learning"
            className="rounded shadow-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-2xl font-bold">5+ Years</h3>
          <p>Experience</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-2xl font-bold">25+</h3>
          <p>Project Challenges</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-2xl font-bold">1500+</h3>
          <p>Positive Reviews</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-2xl font-bold">140K+</h3>
          <p>Trusted Learners</p>
        </div>
      </div>
    </div>
  );
};

export default About;
