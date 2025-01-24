'use client';

import { useSelector } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { RootState } from '@/store/store';
import { FaTelegram, FaTwitter, FaGlobe } from 'react-icons/fa';

export default function ProjectPage() {
  const { id } = useParams();
  const router = useRouter();

  const coin = useSelector((state: RootState) => 
    state.coins.coins.find(coin => coin.id === id)
  );

  if (!coin) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-white text-xl">Coin not found</p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-slate-50 py-2 flex justify-center text-2xl hover:underline hover:font-bold mb-8">
        [Back]
      </Link>

      <div className="bg-gray-800 rounded-lg p-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Левая колонка с изображением */}
          <div className="md:w-1/3">
            <div className="relative w-full aspect-square">
              <Image
                src={coin.image || "/image/rangelogo.png"}
                alt={coin.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Правая колонка с информацией */}
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold text-white mb-2">
              {coin.name} ({coin.symbol})
            </h1>
            
            <p className="text-gray-400 mb-4">
              Created by: {coin.createdBy}
            </p>

            <div className="bg-gray-700 rounded-lg p-4 mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">Description</h2>
              <p className="text-gray-300">{coin.description}</p>
            </div>

            <div className="flex gap-4">
              {coin.telegram && (
                <a
                  href={coin.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FaTelegram size={24} />
                </a>
              )}
              
              {coin.twitter && (
                <a
                  href={coin.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
              )}
              
              {coin.website && (
                <a
                  href={coin.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FaGlobe size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
