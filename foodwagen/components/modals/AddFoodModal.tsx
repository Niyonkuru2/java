"use client";

import { useState } from "react";

interface AddFoodModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddFoodModal({ isOpen, onClose }: AddFoodModalProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    food_name: "",
    food_rating: "",
    food_image: "",
    restaurant_name: "",
    restaurant_logo: "",
    restaurant_status: "Restaurent Status(open/close)",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.food_name.trim()) newErrors["food-name-error"] = "Food Name is required";
    const rating = Number(form.food_rating);
    if (!rating || rating < 1 || rating > 5)
      newErrors["food-rating-error"] = "Food Rating must be a number between 1 and 5";
    if (!form.food_image.trim())
      newErrors["food-image-error"] = "Food Image URL is required";
    if (!form.restaurant_name.trim())
      newErrors["restaurant-name-error"] = "Restaurant Name is required";
    if (!form.restaurant_logo.trim())
      newErrors["restaurant-logo-error"] = "Restaurant Logo URL is required";
    if (!["Open Now", "Closed"].includes(form.restaurant_status))
      newErrors["restaurant-status-error"] =
        "Restaurant Status must be 'Open Now' or 'Closed'";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch("https://6852821e0594059b23cdd834.mockapi.io/Food", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Failed to add food");

      setForm({
        food_name: "",
        food_rating: "",
        food_image: "",
        restaurant_name: "",
        restaurant_logo: "",
        restaurant_status: "Open Now",
      });
      setErrors({});
      onClose();
    } catch (err) {
      alert("Error adding food. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
  className="fixed inset-0 flex items-center justify-center bg-gray-100/50  z-50 animate-slide-up"
  data-test-id="food-add-modal"
>
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 text-center food-modal">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Add a Meal</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-left text-gray-500">
          {/* Food Name */}
          <div>
            <label htmlFor="food_name" className="block text-sm font-semibold mb-1">
              Food Name
            </label>
            <input
              id="food_name"
              name="food_name"
              value={form.food_name}
              onChange={handleChange}
              placeholder="Food name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm food-input"
              aria-describedby="food-name-error"
            />
            {errors["food-name-error"] && (
              <p id="food-name-error" className="text-red-500 text-xs mt-1">
                {errors["food-name-error"]}
              </p>
            )}
          </div>

          {/* Food Rating */}
          <div>
            <label htmlFor="food_rating" className="block text-sm font-semibold mb-1">
              Food Rating
            </label>
            <input
              id="food_rating"
              name="food_rating"
              type="number"
              min="1"
              max="5"
              value={form.food_rating}
              onChange={handleChange}
              placeholder="Food rating"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm food-input"
              aria-describedby="food-rating-error"
            />
            {errors["food-rating-error"] && (
              <p id="food-rating-error" className="text-red-500 text-xs mt-1">
                {errors["food-rating-error"]}
              </p>
            )}
          </div>

          {/* Food Image URL */}
          <div>
            <label htmlFor="food_image" className="block text-sm font-semibold mb-1">
              Food Image URL
            </label>
            <input
              id="food_image"
              name="food_image"
              value={form.food_image}
              onChange={handleChange}
              placeholder="Food image (link)"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm food-input"
              aria-describedby="food-image-error"
            />
            {errors["food-image-error"] && (
              <p id="food-image-error" className="text-red-500 text-xs mt-1">
                {errors["food-image-error"]}
              </p>
            )}
          </div>

          {/* Restaurant Name */}
          <div>
            <label htmlFor="restaurant_name" className="block text-sm font-semibold mb-1">
              Restaurant Name
            </label>
            <input
              id="restaurant_name"
              name="restaurant_name"
              value={form.restaurant_name}
              onChange={handleChange}
              placeholder="Restaurant name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm food-input"
              aria-describedby="restaurant-name-error"
            />
            {errors["restaurant-name-error"] && (
              <p id="restaurant-name-error" className="text-red-500 text-xs mt-1">
                {errors["restaurant-name-error"]}
              </p>
            )}
          </div>

          {/* Restaurant Logo URL */}
          <div>
            <label htmlFor="restaurant_logo" className="block text-sm font-semibold mb-1">
              Restaurant Logo URL
            </label>
            <input
              id="restaurant_logo"
              name="restaurant_logo"
              value={form.restaurant_logo}
              onChange={handleChange}
              placeholder="Restaurant logo (link)"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm food-input"
              aria-describedby="restaurant-logo-error"
            />
            {errors["restaurant-logo-error"] && (
              <p id="restaurant-logo-error" className="text-red-500 text-xs mt-1">
                {errors["restaurant-logo-error"]}
              </p>
            )}
          </div>

          {/* Restaurant Status */}
          <div>
            <label htmlFor="restaurant_status" className="block text-sm font-semibold mb-1">
              Restaurant Status
            </label>
            <select
              id="restaurant_status"
              name="restaurant_status"
              value={form.restaurant_status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm food-input"
              aria-describedby="restaurant-status-error"
            >
               <option value="Restaurent Status(open/close)">Restaurent Status(open/close)</option>
              <option value="Open Now">Open Now</option>
              <option value="Closed">Closed</option>
            </select>
            {errors["restaurant-status-error"] && (
              <p id="restaurant-status-error" className="text-red-500 text-xs mt-1">
                {errors["restaurant-status-error"]}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">
            <button
              type="submit"
              data-test-id="food-add-btn"
              disabled={loading}
              className={`food-btn bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2 rounded-lg transition flex items-center justify-center gap-2 whitespace-nowrap ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Adding Food..." : "Add Food"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="food-btn border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold text-sm px-5 py-2 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
