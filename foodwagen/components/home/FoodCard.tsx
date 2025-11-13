import { MoreVertical, Star, Tags } from "lucide-react";

export default function FoodCard({ food }: { food: any }) {
  // Normalize inconsistent fields from API
  const image =
    food.food_image || food.image || food.avatar || "https://via.placeholder.com/300x200";
  const price = food.price || food.Price || "0.00";
  const rating = food.food_rating || food.rating || "N/A";
  const restaurantName =
    food.restaurant_name || food.name || "Unknown Restaurant";
  const restaurantLogo =
    food.restaurant_logo || food.restaurant_image || food.logo || "https://via.placeholder.com/40";
  const status =
  food.open !== undefined
    ? food.open
      ? "Open"
      : "Closed"
    : food.restaurant_status || food.status || "Closed";


  const isOpen = status.toLowerCase().includes("open");

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ease-out overflow-hidden">
      {/* Image + price tag */}
      <div className="relative">
        <img
          src={image}
          alt={restaurantName}
          className="w-full h-44 object-cover"
        />

        {/* Price badge */}
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <Tags size={14} className="text-white" />
          ${price}
        </span>
      </div>

      {/* Card content */}
      <div className="p-4">
        {/* Restaurant row */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <img
              src={restaurantLogo}
              alt={restaurantName}
              className="w-5 h-5 rounded-md"
            />
            <p className="text-sm font-semibold text-gray-700">
              {restaurantName}
            </p>
          </div>

          <MoreVertical
            size={16}
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
          />
        </div>

        {/* Food name */}
        <h3 className="text-base font-semibold text-gray-800 leading-tight mb-1">
          {food.food_name || food.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 font-medium text-sm mb-3">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          {rating}
        </div>

        {/* Status */}
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            isOpen
              ? "bg-green-100 text-green-700"
              : "bg-red-50 text-red-500"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
