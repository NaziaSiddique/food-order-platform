import { Button } from "@/components/ui/button";

type MenuItemProps = {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
};

export default function MenuItemCard({
  name,
  description,
  price,
  imageUrl = "https://via.placeholder.com/150",
}: MenuItemProps) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition max-w-xs">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <p className="text-lg font-bold mb-4">${price.toFixed(2)}</p>
      <Button>Add to Cart</Button>
    </div>
  );
}
