"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface CoinProps {
  id: string;
  name: string;
  symbol: string;
  description: string;
  image: string;
  createdBy: string;
}

const CoinContainer: React.FC<CoinProps> = ({ 
  id,
  name, 
  symbol, 
  description, 
  image, 
  createdBy 
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/project/${id}`);
  };

  return (
    <div 
      className=""
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="py-2 px-1 flex border hover:border-white gap-2 w-full max-h-[300px] overflow-hidden border-transparent">
        <div className="min-w-32 relative self-start">
          <Image src={image || "/image/rangelogo.png"} className=" w-32 h-auto" alt="Logo" width={512} height={512} />
        </div>
        <div className=" p-2">
          <p className="text-purple-700">Created by {createdBy}</p>
          <p className="text-purple-600">{name} ({symbol})</p>
          <p className="text-purple-800">Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinContainer;
  