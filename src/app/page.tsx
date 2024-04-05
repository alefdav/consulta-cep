'use client';
import { useState } from "react";

export default function Home() {  
  const [cep, setCep] = useState(null);

  const checkClick = async (e:any) => {
    try {
      const res = await fetch(`https://brasilapi.com.br/api/cep/v1/${e.target.value}`);
      const data = await res.json();
      console.log(data);
      setCep(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Consulte seu CEP</h1>

        <input onKeyUp={checkClick} type="text" id="large-input" className="block w-50 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

        <p>{cep}</p>
    </main>
  );
}
