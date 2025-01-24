import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  description: string;
  telegram: string;
  twitter: string;
  website: string;
  image: string;
  createdBy: string;
}

interface CoinState {
  coins: Coin[];
}

const initialState: CoinState = {
  coins: [],
};

export const transformUserToCoin = (user: any): Coin => {
  return {
    id: `coin-${user.login.uuid}`, 
    name: `${user.name.first} Coin`,
    symbol: user.name.first.substring(0, 3).toUpperCase(),
    description: `A unique coin from ${user.location.country}, created by ${user.name.first} ${user.name.last}`,
    telegram: `https://t.me/${user.login.username}`,
    twitter: `https://twitter.com/${user.login.username}`,
    website: `https://${user.login.username}.com`,
    image: user.picture.large,
    createdBy: user.email
  };
};

const coinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    addCoin: (state, action: PayloadAction<Coin>) => {
      const existingCoin = state.coins.find(coin => coin.id === action.payload.id);
      if (!existingCoin) {
        state.coins.push(action.payload);
      }
    },
    addMultipleCoins: (state, action: PayloadAction<Coin[]>) => {
      const newCoins = action.payload.filter(
        newCoin => !state.coins.some(existingCoin => existingCoin.id === newCoin.id)
      );
      state.coins.push(...newCoins);
    },
    removeDuplicates: (state) => {
      state.coins = Array.from(new Set(state.coins.map(coin => coin.id)))
        .map(id => state.coins.find(coin => coin.id === id)!)
    }
  },
});

export const { addCoin, addMultipleCoins, removeDuplicates } = coinSlice.actions;
export default coinSlice.reducer;