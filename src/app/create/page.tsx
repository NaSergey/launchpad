'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import type { RootState } from '@/store/store';
import { addCoin } from '@/store/slices/coinSlice';
import Image from 'next/image';
import Input from '@/components/ui/inputCreate';
import Link from 'next/link';

export default function CreatePage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    description: '',
    telegram: '',
    twitter: '',
    website: ''
  });
  
  const [image, setImage] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<string>('');

  useEffect(() => {
    if (!currentUser) {
      router.push('/');
    }
  }, [currentUser, router]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newCoin = {
      id: Date.now().toString(),
      ...formData,
      image,
      createdBy: currentUser?.email || 'anonymous',
    };
    
    dispatch(addCoin(newCoin));
    router.push('/'); // Перенаправляем на главную после создания
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <Link href="/" className="text-slate-50 py-2 flex justify-center text-2xl hover:underline hover:font-bold">
            [Back]
        </Link>
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-4">
          {/* Image Upload */}
          <div>
            <label className="block text-white mb-2">Coin Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            />
            {imagePreview && (
              <div className="mt-2 relative w-32 h-32">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  fill
                  className="rounded object-cover"
                />
              </div>
            )}
          </div>

          <Input
            label="Coin Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            label="Symbol"
            name="symbol"
            value={formData.symbol}
            onChange={handleChange}
            required
          />

          <Input
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            isTextArea
          />

          <Input
            label="Telegram"
            type="url"
            name="telegram"
            value={formData.telegram}
            onChange={handleChange}
          />

          <Input
            label="Twitter"
            type="url"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
          />

          <Input
            label="Website"
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Create Coin
        </button>
      </form>
    </div>
  );
}