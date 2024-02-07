import React from 'react';

interface CryptoCardProps {
  imageSrc: string;
  name: string;
  detail: string;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ imageSrc, name, detail }) => {
  return (
    <div className="card mx-4 my-4  shadow-white rounded-lg" style={{ width: "24rem", minHeight: "12rem", backgroundColor: "rgb(63 67 70)", color: "white" }}>
      <img src={imageSrc} className="card-img-top rounded-lg w-24 h-24 object-cover p-2" alt={name} />
      <div className="card-body p-4">
        <h5 className="card-title font-bold">{name}</h5>
        <p className="card-text">{detail}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default CryptoCard;








