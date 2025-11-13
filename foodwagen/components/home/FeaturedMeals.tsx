import FoodCard from './FoodCard';

interface Food {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: string;
  restaurant_name?: string;
  restaurant_logo?: string;
  restaurant_status?: string;
}

export default function FeaturedMeals({ foods }: { foods: Food[] }) {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Featured Meals
      </h2>

      {foods.length === 0 ? (
        <div className="text-center text-gray-500">No items available</div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {foods.map((food, index) => (
  <FoodCard key={`${food.id}-${index}`} food={food} />
))}
        </div>
      )}
    </section>
  );
}
