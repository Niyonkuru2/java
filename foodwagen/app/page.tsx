'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import HeroSection from '@/components/home/HeroSection';
import FeaturedMeals from '@/components/home/FeaturedMeals';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
const fetchFoods = async () => {
  const res = await axios.get('https://6852821e0594059b23cdd834.mockapi.io/Food');
  return res.data;
};

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['foods'],
    queryFn: fetchFoods,
  });

  if (isLoading) return <div className="text-center py-10 text-gray-500">Loading meals...</div>;
  if (isError) return <div className="text-center py-10 text-red-500">Failed to load meals.</div>;

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar/>
      <HeroSection />
      <FeaturedMeals foods={data} />
      <Footer/>
    </main>
  );
}
