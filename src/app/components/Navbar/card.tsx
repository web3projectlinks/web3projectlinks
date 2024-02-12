import React from "react";

interface CryptoCardProps {
  imageSrc: string;
  name: string;
  detail: string;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ imageSrc, name, detail }) => {
  return (
    <div className="    flex cursor-pointer flex-col gap-4 rounded-lg border border-gray-300 p-4 text-white shadow shadow-white transition-all hover:opacity-60">
      <section className="flex items-center gap-3">
        <img
          src={imageSrc}
          className="card-img-top h-16 w-16 rounded-full   object-cover p-2"
          alt={name}
        />
        <h5 className="card-title font-bold">{name}</h5>
      </section>
      {/* card-body */}
      <div className=" ">
        <div className="max-h-24 overflow-hidden">
          <p className="line-clamp-3">{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
