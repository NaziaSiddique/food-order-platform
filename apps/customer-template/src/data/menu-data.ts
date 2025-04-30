export type MenuItem = {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl?: string;
  };
  
  export const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Cheeseburger",
      description: "Grilled beef patty with cheese, lettuce, tomato, and pickles.",
      price: 8.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Veggie Wrap",
      description: "Fresh veggies wrapped in a soft tortilla with hummus.",
      price: 6.49,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Chicken Caesar Salad",
      description: "Grilled chicken over romaine, parmesan, and Caesar dressing.",
      price: 7.99,
      imageUrl: "https://via.placeholder.com/150",
    },
  ];
 