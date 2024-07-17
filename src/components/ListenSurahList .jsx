import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";

const ListenSurahList = () => {
  const [surahs, setSurahs] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentSurah, setCurrentSurah] = useState("");

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await axios.get("https://api.alquran.cloud/v1/surah");
        setSurahs(response.data.data);
      } catch (error) {
        console.error("Error fetching Surah data:", error);
      }
    };

    fetchSurahs();
  }, []);

  const openModal = (audioUrl, surahName) => {
    setCurrentAudio(new Audio(audioUrl));
    setCurrentSurah(surahName);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
    }
    setModalIsOpen(false);
  };

  const handleListen = async (surahNumber, surahName) => {
    try {
      const response = await axios.get(
        `https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`
      );
      const audioUrl = response.data.data.ayahs[0].audio;
      openModal(audioUrl, surahName);
    } catch (error) {
      console.error("Error fetching audio data:", error);
    }
  };

  const playAudio = () => {
    if (currentAudio) {
      currentAudio.play();
    }
  };

  const pauseAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
    }
  };

  const stopAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Listen to Surahs</h1>
      <ul className="list-none p-0">
        {surahs.map((surah) => (
          <li key={surah.number} className="mb-4">
            <button
              onClick={() => handleListen(surah.number, surah.englishName)}
              className="block bg-white text-black py-2 px-4 rounded shadow hover:bg-gray-200 w-full text-left"
            >
              {surah.number}. {surah.englishName} -{" "}
              {surah.englishNameTranslation}
            </button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Audio Player"
        ariaHideApp={false}
        className="bg-white p-6 rounded shadow-lg max-w-md mx-auto my-20"
      >
        <h2 className="text-2xl font-bold mb-4">{currentSurah}</h2>
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={playAudio}
            className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
          >
            Play
          </button>
          <button
            onClick={pauseAudio}
            className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600"
          >
            Pause
          </button>
          <button
            onClick={stopAudio}
            className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
          >
            Stop
          </button>
        </div>
        <button
          onClick={closeModal}
          className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ListenSurahList;
