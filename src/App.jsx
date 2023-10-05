import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';

function App() {
  const { data } = useFetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_rfcCIPVpdQ7YZ8TLlNUrDckneefKvLmfn4BpYBacIHtGZF1g6zwUAyrkotqK1paP");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data && data.length > 0) {
      setCurrentIndex(0); // Restaura el índice a 0 cuando se carga la nueva lista de img
    }
  }, [data]);
  // Función para cambiar la URL de la imagen 
  const changeImage = () => {
    if (data && data.length > 0) {
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      {/* div centrado */}
      <div className=' flex flex-col items-center rounded-lg p-4 shadow-md bg-gray-300'>
        <img
          src={data?.[currentIndex]?.url}
          className='w-40 h-40 rounded-full mx-auto'
          alt=""
        />
        <div className='mt-2'>
          {/* trae el temperamento de cada gato en este caso en la data aparece el mismo en todos los cats  */}
          <b className='w-[10rem]'>{data?.[currentIndex]?.breeds[0].temperament} </b>
        </div>
        {/* boton cambia el indice de currentIndex*/}
        <button onClick={changeImage} className='rounded-full p-2 mt-[2rem] bg-violet-500 text-white hover:bg-blue-700 transition duration-300'>
          Botón
        </button>
      </div>
    </div>
  );
}

export default App;
