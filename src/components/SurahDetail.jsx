import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SurahDetail = () => {
  const { number } = useParams();
  const [surah, setSurah] = useState(null);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await axios.get(`https://api.alquran.cloud/v1/surah/${number}`);
        setSurah(response.data.data);
      } catch (error) {
        console.error('Error fetching Surah data:', error);
      }
    };

    fetchSurah();
  }, [number]);

  if (!surah) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {surah.englishName} - {surah.englishNameTranslation}
      </h1>
      <div>
        {surah.ayahs.map((ayah) => (
          <p key={ayah.number} className="mb-2">
            <span className="font-bold">{ayah.numberInSurah}</span>: {ayah.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SurahDetail;
