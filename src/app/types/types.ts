// types/types.ts
export interface Juice {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    calories: number;
    benefits: string[];
  }
  
  export interface CartItem extends Juice {
    quantity: number;
  }