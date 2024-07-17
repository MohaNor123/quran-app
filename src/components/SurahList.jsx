import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SurahList = () => {
  const [surahs, setSurahs] = useState([]);
  const [search, setSearch] = useState('');

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

  const filteredSurahs = surahs.filter(surah =>
    surah.englishName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Surahs</h1>
      <input
        type="text"
        placeholder="Search surah"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <div className="grid grid-cols-1 gap-2">
        {filteredSurahs.map((surah) => (
          <Link
            to={`/surah/${surah.number}`}
            key={surah.number}
            className="block bg-white text-black py-2 px-4 rounded shadow hover:bg-gray-200"
          >
            {surah.number}. {surah.englishName} - {surah.englishNameTranslation}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SurahList;
