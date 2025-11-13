import Image from "next/image";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 py-12 px-6 flex flex-col md:flex-row items-center justify-center gap-10 relative overflow-hidden">
      {/* Left side: Header Text and Search */}
      <div className="w-full md:w-1/2 text-center md:text-left max-w-lg">
        <h1 className="text-5xl font-bold text-white mb-2">Are you starving?</h1>
        <p className="text-yellow-100 mb-6">
          Within a few clicks, find meals that are accessible near you
        </p>
        <SearchBar />
      </div>

      {/* Right side: Dish Image */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
        <Image
          src="/images/dish.png"
          alt="Delicious noodles dish"
          width={400}
          height={400}
          className="rounded-full drop-shadow-xl"
          priority
        />
      </div>
    </section>
  );
}
