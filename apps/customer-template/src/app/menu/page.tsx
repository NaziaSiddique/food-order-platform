import MenuItemCard from "@/components/menu/menu-item-card";
import { menuItems } from "@/data/menu-data";

export default function MenuPage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <MenuItemCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}
