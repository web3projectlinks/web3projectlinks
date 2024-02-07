import React from 'react';
import CryptoCard from './components/Navbar/card';

export default function Home() {
  return (
    <main className="w-full flex flex-wrap justify-around" style={{ height: "auto" }}>
          <CryptoCard
        imageSrc="https://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png"
        name="Bitcoin"
        detail="Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries."
      />

      <CryptoCard
        imageSrc="https://cdn-icons-png.flaticon.com/512/6001/6001368.png"
        name="Ethereum"
        detail="Ethereum is a decentralized, open-source blockchain system that features smart contract functionality."
      />
      <CryptoCard
        imageSrc="https://cdn-icons-png.flaticon.com/512/2268/2268433.png"
        name="Litecoin"
        detail="Litecoin is a peer-to-peer cryptocurrency created by Charlie Lee. It was created based on the Bitcoin protocol but differs in terms of the hashing algorithm used."
      />
      {/* Add more CryptoCard components as needed */}
    </main>
  );
}



