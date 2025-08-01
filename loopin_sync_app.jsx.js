// LoopinSyncApp - Mini App Token Farming (Dasar)
// Siap di-deploy ke Vercel dan disambungkan ke World App nanti

import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    // Simulasi klaim token (nanti akan disambung ke smart contract)
    setClaimed(true);
    alert("Klaim berhasil! Token LOOPIN dikirim ke wallet Anda (simulasi)");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-100 to-blue-200 text-gray-800">
      <Head>
        <title>LoopinSync Mini App</title>
        <meta name="description" content="Mini App Token Farming by Loopin" />
      </Head>

      <main className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4">🌱 LoopinSync</h1>
        <p className="text-lg mb-6">Token Farming Harian di World App</p>

        {!claimed ? (
          <button
            onClick={handleClaim}
            className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow-lg hover:bg-green-700 transition"
          >
            Klaim Token Harian
          </button>
        ) : (
          <p className="text-green-700 font-semibold text-xl">Kamu sudah klaim hari ini!</p>
        )}
      </main>

      <footer className="mt-10 text-sm text-gray-500">© 2025 Loopin</footer>
    </div>
  );
}
