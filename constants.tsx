
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Lahori Fried Fish',
    description: 'Fresh catch from the Karachi coast, marinated in traditional Walled City spices and deep-fried to a golden crunch.',
    price: 'Rs. 1,450',
    category: 'Appetizers',
    image: '/menu-1.avif',
    tags: ['Coastal-Lahori', 'Spicy']
  },
  {
    id: '2',
    name: 'Charsi Karahi',
    description: 'Authentic Namak Mandi style mutton, cooked in its own fat with tomatoes, salt, and green chilies. Pure, rustic, and bold.',
    price: 'Rs. 3,800',
    category: 'Main Course',
    image: '/menu-2.avif',
    tags: ['Traditional', 'Meat Lovers']
  },
  {
    id: '3',
    name: 'Shahi Matka Kulfi',
    description: 'Slow-reduced milk infused with saffron and pistachios, frozen in clay pots for that authentic earthy finish.',
    price: 'Rs. 650',
    category: 'Desserts',
    image: '/menu-3.avif',
    tags: ['Imperial', 'Sweet']
  },
];

export const APP_NAME = "Khatti Methi Rasoi";
export const TAGLINE = "The Soul of Lahore, The Heart of Karachi";
