/** @format */

import React from "react";
import CryptoCard from "./components/Navbar/card";

const cryptoData = [
  {
    imageSrc: "https://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",
    name: "Bitcoin",
    detail:
      "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
  },
  {
    imageSrc: "https://cdn-icons-png.flaticon.com/512/6001/6001368.png",
    name: "Ethereum",
    detail:
      "Ethereum is a decentralized, open-source blockchain system that features smart contract functionality.",
  },
  {
    imageSrc: "https://cdn-icons-png.flaticon.com/512/2268/2268433.png",
    name: "Litecoin",
    detail:
      "Litecoin is a peer-to-peer cryptocurrency created by Charlie Lee. It was created based on the Bitcoin protocol but differs in terms of the hashing algorithm used.",
  },
  {
    // imageSrc: "https://www.iconspng.com/images/chainlink-logo.png",
    imageSrc:
      "https://th.bing.com/th/id/OIP.Wdwv9_9SgxzzpveuIOnHOgHaHT?rs=1&pid=ImgDetMain",
    name: "Chainlink",
    detail:
      "Chainlink is a decentralized oracle network that enables smart contracts on Ethereum to securely connect to external data sources, APIs, and payment systems.",
  },
  {
    imageSrc: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    name: "Cardano",
    detail:
      "Cardano is a blockchain platform for changemakers, innovators, and visionaries, with the tools and technologies required to create possibility for the many, as well as the few, and bring about positive global change.",
  },
  {
    imageSrc: "https://cryptologos.cc/logos/stellar-xlm-logo.png",
    name: "Stellar",
    detail:
      "Stellar is an open network that allows money to be moved and stored. When Stellar’s network launched in 2015, 100 billion lumens (XLM) were created as specified in the protocol. These tokens could have a range of uses, but the network’s primary goal is to facilitate cross-border payments, particularly for the unbanked.",
  },
  {
    imageSrc: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    name: "Binance Coin",
    detail:
      "Binance Coin is a cryptocurrency used to pay fees on the Binance cryptocurrency exchange.",
  },
  {
    imageSrc: "https://cryptologos.cc/logos/solana-sol-logo.png",
    name: "Solana",
    detail:
      "Solana is a high-performance blockchain supporting decentralized applications and crypto-currencies.",
  },
  {
    imageSrc: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
    name: "Avalanche",
    detail:
      "Avalanche is an open-source platform for launching decentralized finance applications and enterprise blockchain deployments in one interoperable, highly scalable ecosystem.",
  },
  {
    imageSrc: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    name: "Polkadot",
    detail:
      "Polkadot is a multi-chain blockchain platform that enables interoperability between different blockchains. It aims to achieve a fully decentralized and private web where users have control over their own data.",
  },
  {
    imageSrc: "https://cryptologos.cc/logos/solana-sol-logo.png",
    name: "Solana",
    detail:
      "Solana is a high-performance blockchain supporting decentralized applications and crypto-currencies.",
  },
  {
    imageSrc: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
    name: "Avalanche",
    detail:
      "Avalanche is an open-source platform for launching decentralized finance applications and enterprise blockchain deployments in one interoperable, highly scalable ecosystem.",
  },
  {
    imageSrc: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    name: "Polkadot",
    detail:
      "Polkadot is a multi-chain blockchain platform that enables interoperability between different blockchains. It aims to achieve a fully decentralized and private web where users have control over their own data.",
  },
  {
    imageSrc: "https://cryptologos.cc/logos/tezos-xtz-logo.png",
    name: "Tezos",
    detail:
      "Tezos is a decentralized blockchain that governs itself by establishing a true digital commonwealth. It facilitates formal verification, a technique that mathematically proves the correctness of the code governing transactions and boosts the security of the most sensitive or financially weighted smart contracts.",
  },
  {
    imageSrc: "https://cryptologos.cc/logos/theta-theta-logo.png",
    name: "Theta",
    detail:
      "Theta is a decentralized video delivery network, powered by users and an innovative new blockchain. Theta allows users to simultaneously watch video content and earn token rewards for relaying video to other users who are also watching the same content.",
  },
  {
    imageSrc: "https://cryptologos.cc/logos/vechain-vet-logo.png",
    name: "VeChain",
    detail:
      "VeChain is a blockchain platform that aims to improve business operations by enhancing the tracking of processes and products. It allows manufacturers to add sensors, such as RFID tags, to their products that can then record data onto the VeChain blockchain.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-4 px-3  pb-10 sm:px-10">
      <h1 className="  border-b border-gray-700 py-5 text-3xl font-semibold text-white ">
        All Projects
      </h1>
      <section className=" grid  grid-cols-1 gap-6  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cryptoData.map((d, i) => (
          <CryptoCard key={i} {...{ ...d }} />
        ))}
      </section>
      {/* Add more CryptoCard components as needed */}
    </main>
  );
}
