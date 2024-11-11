  import {create} from 'zustand';
  import axios from 'axios';
  
  interface Listing {
    id: string;
    title: string;
    image: string;
    description: string;
  }
  
  interface StoreState {
    listings: Listing[];
    fetchListings: () => Promise<void>;
  }
  
  export const useStore = create<StoreState>((set) => ({
    listings: [],
    fetchListings: async () => {
      try {
        const response = await axios.get('https://670fdb94a85f4164ef2c3926.mockapi.io/improve');
        set({ listings: response.data });
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik:", error);
      }
    }
  }));
  
  
