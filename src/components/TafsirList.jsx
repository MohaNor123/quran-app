import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TafsirList = () => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await axios.get('https://api.alquran.cloud/v1/surah');
        setSurahs(response.data.data);
      } catch (error) {
        console.error('Error fetching Surah data:', error);
      }
    };

    fetchSurahs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tafsir</h1>
      <ul className="list-none p-0">
        {surahs.map((surah) => (
          <li key={surah.number} className="mb-2">
            <Link
              to={`/tafsir/${surah.number}`}
              className="block bg-white text-black py-2 px-4 rounded shadow hover:bg-gray-200"
            >
              {surah.number}. {surah.englishName} - {surah.englishNameTranslation}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TafsirList;
