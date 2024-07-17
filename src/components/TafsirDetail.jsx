import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TafsirDetail = () => {
  const { number } = useParams();
  const [tafsir, setTafsir] = useState(null);

  useEffect(() => {
    const fetchTafsir = async () => {
      try {
        const response = await axios.get('https://muslimsalat.com/london/daily.json?key=API_KEY&jsoncallback=?');
        setTafsir(response.data.data);
      } catch (error) {
        console.error('Error fetching Tafsir data:', error);
      }
    };

    fetchTafsir();
  }, [number]);

  if (!tafsir) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Tafsir for Surah {tafsir.surah.name} - {tafsir.surah.englishName}
      </h1>
      <div>
        {tafsir.tafsir.id.kemenag.text.map((ayah, index) => (
          <p key={index} className="mb-2">
            <span className="font-bold">Ayah {index + 1}:</span> {ayah}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TafsirDetail;
