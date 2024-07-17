import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookQuran } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-green-600 text-white rounded-full px-4 py-1 inline-block mb-4">
          Quran Progress App 🌙
        </div>
        <h1 className="text-5xl font-bold mb-6">
          Maalin kasta, aqri quraanka. waxaad ku dareemi dontaa deganaasho.
        </h1>
        <p className="text-lg mb-6">
          Islam's central religious text is the Holy Quran. As far as Muslims
          are concerned, the Holy Quran is a source of guidance and direction
          for mankind.
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className="bg-yellow-500 text-blue-900 px-4 py-2 rounded hover:bg-yellow-600"
            onClick={() => navigate("/sura")}
          >
            Aqri Qur'aanka
          </button>
          <button
            className="bg-transparent border-2 border-white text-white px-4 py-2 rounded hover:bg-white hover:text-gray-900"
            onClick={() => navigate("/listen")}
          >
            Dhageyso
          </button>
        </div>
        <div className="relative w-full mt-10">
          <FontAwesomeIcon
            icon={faBookQuran}
            className="text-white text-9xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
