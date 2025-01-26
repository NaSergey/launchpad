"use client";
import { useSelector } from 'react-redux';
import CoinContainer from '@/components/ui/CoinContainer';
import type { RootState } from '@/store/store';

const CoinList: React.FC = () => {
  const coins = useSelector((state: RootState) => state.coins.coins);

  const limitedCoins = coins.slice(0, 24);

  return (
    <div className="grid w-full p-0 md:p-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {limitedCoins.map((coin) => (
        <CoinContainer
          key={coin.id}
          id={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          description={coin.description}
          image={coin.image}
          createdBy={coin.createdBy}
        />
      ))}
    </div>
  );
};

export default CoinList;
