import React, { useEffect, useState } from 'react';
import MusicService from '../../services/MusicService';

function ClientMusic() {

  const [music, setMusic] = useState([]);

  useEffect(() => {
    MusicService.getMusic().then(res => {
        setMusic(res.data);
    });
  }, []);

  return (
    <div className='flex-flex-row'>

      <div className="flex flex-col gap-4 w-full bg-white rounded-xl mb-5">
        <h1 className='text-xl font-bold pt-5 pl-5'>Music / Videos</h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-8 p-5 pt-0'>
          {music.map((item, index) => (
            <iframe key={index} className='w-full aspect-[3/2]' src={item.link} title={`video${index + 1}`} allowFullScreen> </iframe>
          ))}
        </div>
      </div>
  
    </div>
  );
}

export default ClientMusic;
