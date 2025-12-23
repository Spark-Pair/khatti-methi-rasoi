
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Appetizers' | 'Main Course' | 'Desserts' | 'Drinks';
  image: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ReservationData {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
}
