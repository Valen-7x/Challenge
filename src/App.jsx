import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';

function App() {
  const { data } = useFetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_rfcCIPVpdQ7YZ8TLlNUrDckneefKvLmfn4BpYBacIHtGZF1g6zwUAyrkotqK1paP");
  const [imageURL, setImageURL] = useState('');
  useEffect(() => {
    if (data && data.length > 0) {
      setImageURL(data[0].url);
    }
  }, [data]);
  // Función para cambiar la URL de la imagen
  const changeImageURL = () => {
    // Cambia la URL de la imagen (por ejemplo, a data[2].url)
    if (data && data.length > 2) {
      setImageURL(data[2].url);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-300 rounded-2xl'>
      {/* div centrado */}
      <div className=' flex flex-col items-center bg-white rounded-lg p-4 shadow-md'>
        <img
          src={imageURL}
          className='w-40 h-40 rounded-full mx-auto'
          alt=""
        />
        <div className='mt-4'>
          <p className='w-[20rem]'>{data?.[0].breeds[0].description}</p>
        </div>
        {/* boton implementado con el hook useState */}
        <button onClick={changeImageURL} className='rounded-full p-2 bg-violet-500 text-white hover:bg-blue-700 transition duration-300'>
          Botón
        </button>
      </div>
    </div>
  );
}

export default App;
