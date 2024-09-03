import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState(''); // State untuk menyimpan hasil kalkulasi

  // Fungsi untuk menangani klik tombol dan menggabungkan nilai tombol ke hasil
  const handleClick = (e) => setResult(result.concat(e.target.id));

  // Fungsi untuk menghapus semua input
  const clear = () => setResult('');

  // Fungsi untuk menghapus satu karakter terakhir
  const deleteEl = () => setResult(result.slice(0, -1));

  // Fungsi untuk menghitung hasil ekspresi
  const calculate = () => {
    try {
      setResult(eval(result).toString()); // Gunakan eval untuk menghitung, tangani kesalahan jika ada
    } catch (error) {
      setResult('Error'); // Tampilkan "Error" jika ada kesalahan pada perhitungan
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className='bg-gray h-[450px] w-[400px] rounded-md border-2 border-blue shadow-[0_1px_6px_5px#000000]'>
        <input
          className='bg-gray rounded-md p-4 w-full text-2xl font-semibold text-white text-right border-2 border-blue shadow-inner shadow-current'
          type='text'
          value={result}
          disabled
        />
        <p className='bg-pink inline-block rounded-xl px-2 py-2 my-2 text-sm border-blue'>Andika Calculator</p>
        <div className='grid grid-cols-4 px-2 gap-2'>
          <button className='p-4 bg-orange text-white rounded-xl shadow-md hover:bg-orange transition' onClick={clear}>AC</button>
          <button className='p-4 bg-yellow-500 text-white rounded-xl shadow-md hover:bg-yellow transition' onClick={deleteEl}>DEL</button>
          <button id='.' className='p-4 bg-blue text-white rounded-xl shadow-md hover:bg-blue transition' onClick={handleClick}>.</button>
          <button id='/' className='p-4 bg-blue text-white rounded-xl shadow-md hover:bg-blue transition' onClick={handleClick}>/</button>

          {/* Tombol angka dan operasi */}
          <button id='7' className='p-4 bg-white rounded-xl shadow-md hover:bg-gray transition' onClick={handleClick}>7</button>
          <button id='8' className='p-4 bg-white rounded-xl shadow-md hover:bg-gray transition' onClick={handleClick}>8</button>
          <button id='9' className='p-4 bg-white rounded-xl shadow-md hover:bg-gray transition' onClick={handleClick}>9</button>
          <button id='*' className='p-4 bg-blue text-white rounded-xl shadow-md hover:bg-blue transition' onClick={handleClick}>*</button>

          <button id='4' className='p-4 bg-white rounded-xl shadow-md hover:bg-gray-100 transition' onClick={handleClick}>4</button>
          <button id='5' className='p-4 bg-white rounded-xl shadow-md hover:bg-gray-100 transition' onClick={handleClick}>5</button>
          <button id='6' className='p-4 bg-white rounded-xl shadow-md hover:bg-gray-100 transition' onClick={handleClick}>6</button>
          <button id='-' className='p-4 bg-blue text-white rounded-xl shadow-md hover:drak2 transition' onClick={handleClick}>-</button>

          <button id='1' className='p-4 bg-white rounded-xl shadow-md hover:bg-gray-100 transition' onClick={handleClick}>1</button>
          <button id='2' className='p-4 bg-white rounded-xl shadow-md hover:bg-gray-100 transition' onClick={handleClick}>2</button>
          <button id='3' className='p-4 bg-white rounded-xl shadow-md hover:bg-gray-100 transition' onClick={handleClick}>3</button>
          <button id='+' className='p-4 bg-blue text-white rounded-xl shadow-md hover:bg-blue transition' onClick={handleClick}>+</button>

          <button id='00' className='p-4 bg-white rounded-xl shadow-md hover:bg-gray transition' onClick={handleClick}>00</button>
          <button id='0' className='p-4 bg-white rounded-xl shadow-md hover:bg-gray transition' onClick={handleClick}>0</button>

          {/* Tombol untuk menghitung hasil */}
          <button className='col-span-2 p-4 bg-blue text-white rounded-xl shadow-md hover:bg-blue transition' onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
