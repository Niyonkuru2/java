import { Food } from "@/types/food";

const BASE_URL = "https://6852821e0594059b23cdd834.mockapi.io";

export async function addFood(form: Food): Promise<void> {
  const res = await fetch(`${BASE_URL}/Food`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (!res.ok) throw new Error("Failed to add food");
}
