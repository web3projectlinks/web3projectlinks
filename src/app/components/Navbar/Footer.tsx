import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">About Us</h4>
            <div className="rounded-md bg-gray-900 p-6 shadow-md">
              <p className="text-gray-300">
                Web3ProjectLinks is your trusted source for verified cryptocurrency links. We curate only the most reliable resources to help you navigate the cryptocurrency space safely. Our mission is to protect users from scams by providing authentic links to exchanges, wallets, news sources, and more. Join us in our commitment to creating a secure environment for cryptocurrency enthusiasts worldwide.
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">Top Cryptocurrencies</h4>
            <ul className="space-y-2">
              <li><a href="https://bitcoin.org/" className="flex items-center space-x-1"><img src="https://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png" alt="Bitcoin" className="h-8" />Bitcoin</a></li>
              <li><a href="https://ethereum.org/" className="flex items-center space-x-2"><img src="https://cdn-icons-png.flaticon.com/512/6001/6001368.png" alt="Ethereum" className="h-7 m-0.5" />Ethereum</a></li>
              <li><a href="https://litecoin.org/" className="flex items-center space-x-2"><img src="https://cdn-icons-png.flaticon.com/512/2268/2268433.png" alt="Litecoin" className=" h-6 m-0.5" />Litecoin</a></li>
              {/* Add more top cryptocurrencies as needed */}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="flex space-x-4">
              <li><a href="https://discord.gg/ZnuJzgp94V"><img src="/discord.png" alt="Discord" className="w-8 h-8" /></a></li> {/* Add Discord link */}
              <li><a href="https://t.me/web3projectlinks"><img src="/telegram.png" alt="Telegram" className="w-8 h-8" /></a></li> {/* Add Telegram link */}
              <li><a href="https://twitter.com/web3projectlink"><img src="/twitter.png" alt="Twitter" className="w-8 h-8" /></a></li> {/* Add Twitter link */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



