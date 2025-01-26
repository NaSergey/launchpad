'use client';

import Header from "@/components/layout/header"
import Filter from "@/components/layout/filter"
import CoinList from "@/components/layout/coinList"
import CreateCoin from '@/components/layout/createCoin';
import CoinContainer from '@/components/ui/CoinContainer';
import Input from '@/components/ui/input';
import Image from "next/image";
import { useEffect } from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import { addMultipleCoins, transformUserToCoin } from '@/store/slices/coinSlice';

type ClientComponentProps = {
  data: any;
};

const ClientComponent = ({ data }: ClientComponentProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (data && data.results && Array.isArray(data.results) ) {
      const coins = data.results.map(transformUserToCoin);
      dispatch(addMultipleCoins(coins));
    }
  }, [data, dispatch]);
  return (
    <div className="w-full h-full">
      <Header />
      <CreateCoin />
      <div className="flex items-center flex-col justify-center w-full">
        <CoinContainer id="12425" name="№1" symbol="TRUMP" description="absd" />
        <div className="pt-4">
          <Input text="Search" />
        </div>
      </div>
      <Filter />
      <CoinList />
    </div>
  );
};

export default ClientComponent;
