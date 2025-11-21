'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Mutations from './components/Mutations';
import Brainrots from './components/Brainrots';
import BrainrotDetails from './components/BrainrotDetails';
import { Brainrot, Mutation } from '@/app/types';
import './globals.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState('mutations');
  const [selectedMutation, setSelectedMutation] = useState<Mutation | null>(null);
  const [selectedBrainrot, setSelectedBrainrot] = useState<Brainrot | null>(null);

  // All brainrot IDs (1-18 for all brainrots across mutations)
  const allBrainrotIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  // Mutation data with percentage bonuses - ALL mutations have ALL brainrots
  const mutationsData: Mutation[] = [
    { 
      id: 1, 
      name: 'Normal', 
      emoji: '⚪',
      bonus: 0,
      brainrots: allBrainrotIds
    },
    { 
      id: 2, 
      name: 'Golden', 
      emoji: '🟡',
      bonus: 50,
      brainrots: allBrainrotIds
    },
    { 
      id: 3, 
      name: 'Diamond', 
      emoji: '💎',
      bonus: 100,
      brainrots: allBrainrotIds
    },
    { 
      id: 4, 
      name: 'Volcanic', 
      emoji: '🌋',
      bonus: 150,
      brainrots: allBrainrotIds
    },
    { 
      id: 5, 
      name: 'Bloodmoon', 
      emoji: '🔴',
      bonus: 250,
      brainrots: allBrainrotIds
    },
    { 
      id: 6, 
      name: 'Galaxy', 
      emoji: '🌌',
      bonus: 300,
      brainrots: allBrainrotIds
    },
    { 
      id: 7, 
      name: 'Blackhole', 
      emoji: '⚫',
      bonus: 350,
      brainrots: allBrainrotIds
    },
    { 
      id: 8, 
      name: 'Halloween', 
      emoji: '🎃',
      bonus: 450,
      brainrots: allBrainrotIds
    },
    { 
      id: 9, 
      name: 'Yin Yang', 
      emoji: '☯️',
      bonus: 500,
      brainrots: allBrainrotIds
    },
    { 
      id: 10, 
      name: 'Extinct', 
      emoji: '🦖',
      bonus: 550,
      brainrots: allBrainrotIds
    },
  ];

  // Brainrot data with mutation bonuses - complete all mutations
  const brainrotsData: Brainrot[] = [
    // Normal Mutation Brainrots
    { id: 1, name: 'Gangster Footera', type: 'Normal', rarity: 'Basic', emoji: '👣', mutation: 'Normal', mutationBonus: 0, baseIncome: 25 },
    { id: 2, name: 'Frulli Frulla', type: 'Normal', rarity: 'Basic', emoji: '🌀', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 3, name: 'Trulimero Trulichina', type: 'Normal', rarity: 'Basic', emoji: '🎭', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 4, name: 'Trippi Troppi', type: 'Normal', rarity: 'Basic', emoji: '🤪', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 5, name: 'Boneca Ambalabu', type: 'Normal', rarity: 'Rare', emoji: '💀', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 6, name: 'Ballerina Cappuccina', type: 'Normal', rarity: 'Rare', emoji: '💃', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 7, name: 'Bananita Dolfinita', type: 'Normal', rarity: 'Rare', emoji: '🍌', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 8, name: 'Tung Tung Tung Sahur', type: 'Normal', rarity: 'Rare', emoji: '🥁', mutation: 'Normal', mutationBonus: 0, baseIncome: 30},
    { id: 9, name: 'U Din Din Din', type: 'Normal', rarity: 'Epic', emoji: '🟡', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 10, name: 'Brr Brr Patapim', type: 'Normal', rarity: 'Epic', emoji: '🌵', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 11, name: 'Il Cacto Hipoptamo', type: 'Normal', rarity: 'Epic', emoji: '🌵', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 12, name: 'Cappuccino Assassino', type: 'Normal', rarity: 'Epic', emoji: '🍵', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 13, name: 'Frigo Camelo', type: 'Normal', rarity: 'Epic', emoji: '🐫', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 14, name: 'Unkown Brainrot', type: 'Normal', rarity: 'Epic', emoji: '❔', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 15, name: 'Svinino Bombodino', type: 'Normal', rarity: 'Legendary', emoji: '🦏', mutation: 'Normal', mutationBonus: 0, baseIncome: 180},
    { id: 16, name: 'Tatata Sahur', type: 'Normal', rarity: 'Legendary', emoji: '🫖', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 17, name: 'Chimpanzini Bananini', type: 'Normal', rarity: 'Legendary', emoji: '🍌', mutation: 'Normal', mutationBonus: 0, baseIncome: 115},
    { id: 18, name: 'Zombie Orcalero Orcala', type: 'Normal', rarity: 'Legendary', emoji: '🧟', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 19, name: 'Unkown Brainrot', type: 'Normal', rarity: 'Legendary', emoji: '❔', mutation: 'Normal', mutationBonus: 0, baseIncome: "x"},
    { id: 20, name: 'Pipi Kiwi', type: 'Normal', rarity: 'Legendary', emoji: '🥝', mutation: 'Normal', mutationBonus: 0, baseIncome: 175},
    { id: 21, name: 'Lirili Larila', type: 'Normal', rarity: 'Legendary', emoji: '🐘', mutation: 'Normal', mutationBonus: 0, baseIncome: 135},
  
    
    // Golden Mutation Brainrots
    { id: 1, name: 'Gangster Footera', type: 'Golden', rarity: 'Basic', emoji: '👣', mutation: 'Golden', mutationBonus: 50, baseIncome: 25 },
    { id: 2, name: 'Frulli Frulla', type: 'Golden', rarity: 'Basic', emoji: '🌀', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 3, name: 'Trulimero Trulichina', type: 'Golden', rarity: 'Basic', emoji: '🎭', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 4, name: 'Trippi Troppi', type: 'Golden', rarity: 'Basic', emoji: '🤪', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 5, name: 'Boneca Ambalabu', type: 'Golden', rarity: 'Rare', emoji: '💀', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 6, name: 'Ballerina Cappuccina', type: 'Golden', rarity: 'Rare', emoji: '💃', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 7, name: 'Bananita Dolfinita', type: 'Golden', rarity: 'Rare', emoji: '🍌', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 8, name: 'Tung Tung Tung Sahur', type: 'Golden', rarity: 'Rare', emoji: '🥁', mutation: 'Golden', mutationBonus: 50, baseIncome: 30},
    { id: 9, name: 'U Din Din Din', type: 'Golden', rarity: 'Epic', emoji: '🟡', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 10, name: 'Brr Brr Patapim', type: 'Golden', rarity: 'Epic', emoji: '🌵', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 11, name: 'Il Cacto Hipoptamo', type: 'Golden', rarity: 'Epic', emoji: '🌵', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 12, name: 'Cappuccino Assassino', type: 'Golden', rarity: 'Epic', emoji: '🍵', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 13, name: 'Frigo Camelo', type: 'Golden', rarity: 'Epic', emoji: '🐫', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 14, name: 'Unkown Brainrot', type: 'Golden', rarity: 'Epic', emoji: '❔', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 15, name: 'Svinino Bombodino', type: 'Golden', rarity: 'Legendary', emoji: '🦏', mutation: 'Golden', mutationBonus: 50, baseIncome: 180},
    { id: 16, name: 'Tatata Sahur', type: 'Golden', rarity: 'Legendary', emoji: '🫖', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 17, name: 'Chimpanzini Bananini', type: 'Golden', rarity: 'Legendary', emoji: '🍌', mutation: 'Golden', mutationBonus: 50, baseIncome: 115},
    { id: 18, name: 'Zombie Orcalero Orcala', type: 'Golden', rarity: 'Legendary', emoji: '🧟', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 19, name: 'Unkown Brainrot', type: 'Golden', rarity: 'Legendary', emoji: '❔', mutation: 'Golden', mutationBonus: 50, baseIncome: "x"},
    { id: 20, name: 'Pipi Kiwi', type: 'Golden', rarity: 'Legendary', emoji: '🥝', mutation: 'Golden', mutationBonus: 50, baseIncome: 175},
    { id: 21, name: 'Lirili Larila', type: 'Golden', rarity: 'Legendary', emoji: '🐘', mutation: 'Golden', mutationBonus: 50, baseIncome: 135},

    // Diamond Mutation Brainrots
    { id: 1, name: 'Gangster Footera', type: 'Diamond', rarity: 'Basic', emoji: '👣', mutation: 'Diamond', mutationBonus: 100, baseIncome: 25 },
    { id: 2, name: 'Frulli Frulla', type: 'Diamond', rarity: 'Basic', emoji: '🌀', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 3, name: 'Trulimero Trulichina', type: 'Diamond', rarity: 'Basic', emoji: '🎭', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 4, name: 'Trippi Troppi', type: 'Diamond', rarity: 'Basic', emoji: '🤪', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 5, name: 'Boneca Ambalabu', type: 'Diamond', rarity: 'Rare', emoji: '💀', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 6, name: 'Ballerina Cappuccina', type: 'Diamond', rarity: 'Rare', emoji: '💃', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 7, name: 'Bananita Dolfinita', type: 'Diamond', rarity: 'Rare', emoji: '🍌', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 8, name: 'Tung Tung Tung Sahur', type: 'Diamond', rarity: 'Rare', emoji: '🥁', mutation: 'Diamond', mutationBonus: 100, baseIncome: 30},
    { id: 9, name: 'U Din Din Din', type: 'Diamond', rarity: 'Epic', emoji: '🟡', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 10, name: 'Brr Brr Patapim', type: 'Diamond', rarity: 'Epic', emoji: '🌵', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 11, name: 'Il Cacto Hipoptamo', type: 'Diamond', rarity: 'Epic', emoji: '🌵', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 12, name: 'Cappuccino Assassino', type: 'Diamond', rarity: 'Epic', emoji: '🍵', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 13, name: 'Frigo Camelo', type: 'Diamond', rarity: 'Epic', emoji: '🐫', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 14, name: 'Unkown Brainrot', type: 'Diamond', rarity: 'Epic', emoji: '❔', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 15, name: 'Svinino Bombodino', type: 'Diamond', rarity: 'Legendary', emoji: '🦏', mutation: 'Diamond', mutationBonus: 100, baseIncome: 180},
    { id: 16, name: 'Tatata Sahur', type: 'Diamond', rarity: 'Legendary', emoji: '🫖', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 17, name: 'Chimpanzini Bananini', type: 'Diamond', rarity: 'Legendary', emoji: '🍌', mutation: 'Diamond', mutationBonus: 100, baseIncome: 115},
    { id: 18, name: 'Zombie Orcalero Orcala', type: 'Diamond', rarity: 'Legendary', emoji: '🧟', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 19, name: 'Unkown Brainrot', type: 'Diamond', rarity: 'Legendary', emoji: '❔', mutation: 'Diamond', mutationBonus: 100, baseIncome: "x"},
    { id: 20, name: 'Pipi Kiwi', type: 'Diamond', rarity: 'Legendary', emoji: '🥝', mutation: 'Diamond', mutationBonus: 100, baseIncome: 175},
    { id: 21, name: 'Lirili Larila', type: 'Diamond', rarity: 'Legendary', emoji: '🐘', mutation: 'Diamond', mutationBonus: 100, baseIncome: 135},

    // Volcanic Brainrot Mutations
    { id: 1, name: 'Gangster Footera', type: 'Volcanic', rarity: 'Basic', emoji: '👣', mutation: 'Volcanic', mutationBonus: 150, baseIncome: 25 },
    { id: 2, name: 'Frulli Frulla', type: 'Volcanic', rarity: 'Basic', emoji: '🌀', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 3, name: 'Trulimero Trulichina', type: 'Volcanic', rarity: 'Basic', emoji: '🎭', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 4, name: 'Trippi Troppi', type: 'Volcanic', rarity: 'Basic', emoji: '🤪', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 5, name: 'Boneca Ambalabu', type: 'Volcanic', rarity: 'Rare', emoji: '💀', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 6, name: 'Ballerina Cappuccina', type: 'Volcanic', rarity: 'Rare', emoji: '💃', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 7, name: 'Bananita Dolfinita', type: 'Volcanic', rarity: 'Rare', emoji: '🍌', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 8, name: 'Tung Tung Tung Sahur', type: 'Volcanic', rarity: 'Rare', emoji: '🥁', mutation: 'Volcanic', mutationBonus: 150, baseIncome: 30},
    { id: 9, name: 'U Din Din Din', type: 'Volcanic', rarity: 'Epic', emoji: '🟡', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 10, name: 'Brr Brr Patapim', type: 'Volcanic', rarity: 'Epic', emoji: '🌵', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 11, name: 'Il Cacto Hipoptamo', type: 'Volcanic', rarity: 'Epic', emoji: '🌵', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 12, name: 'Cappuccino Assassino', type: 'Volcanic', rarity: 'Epic', emoji: '🍵', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 13, name: 'Frigo Camelo', type: 'Volcanic', rarity: 'Epic', emoji: '🐫', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 14, name: 'Unkown Brainrot', type: 'Volcanic', rarity: 'Epic', emoji: '❔', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 15, name: 'Svinino Bombodino', type: 'Volcanic', rarity: 'Legendary', emoji: '🦏', mutation: 'Volcanic', mutationBonus: 150, baseIncome: 180},
    { id: 16, name: 'Tatata Sahur', type: 'Volcanic', rarity: 'Legendary', emoji: '🫖', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 17, name: 'Chimpanzini Bananini', type: 'Volcanic', rarity: 'Legendary', emoji: '🍌', mutation: 'Volcanic', mutationBonus: 150, baseIncome: 115},
    { id: 18, name: 'Zombie Orcalero Orcala', type: 'Volcanic', rarity: 'Legendary', emoji: '🧟', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 19, name: 'Unkown Brainrot', type: 'Volcanic', rarity: 'Legendary', emoji: '❔', mutation: 'Volcanic', mutationBonus: 150, baseIncome: "x"},
    { id: 20, name: 'Pipi Kiwi', type: 'Volcanic', rarity: 'Legendary', emoji: '🥝', mutation: 'Volcanic', mutationBonus: 150, baseIncome: 175},
    { id: 21, name: 'Lirili Larila', type: 'Volcanic', rarity: 'Legendary', emoji: '🐘', mutation: 'Volcanic', mutationBonus: 150, baseIncome: 135},

    // Bloodmoon Brainrot Mutations
{ id: 1, name: 'Gangster Footera', type: 'Bloodmoon', rarity: 'Basic', emoji: '👣', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: 25 },
{ id: 2, name: 'Frulli Frulla', type: 'Bloodmoon', rarity: 'Basic', emoji: '🌀', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 3, name: 'Trulimero Trulichina', type: 'Bloodmoon', rarity: 'Basic', emoji: '🎭', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 4, name: 'Trippi Troppi', type: 'Bloodmoon', rarity: 'Basic', emoji: '🤪', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 5, name: 'Boneca Ambalabu', type: 'Bloodmoon', rarity: 'Rare', emoji: '💀', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 6, name: 'Ballerina Cappuccina', type: 'Bloodmoon', rarity: 'Rare', emoji: '💃', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 7, name: 'Bananita Dolfinita', type: 'Bloodmoon', rarity: 'Rare', emoji: '🍌', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 8, name: 'Tung Tung Tung Sahur', type: 'Bloodmoon', rarity: 'Rare', emoji: '🥁', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: 30},
{ id: 9, name: 'U Din Din Din', type: 'Bloodmoon', rarity: 'Epic', emoji: '🟡', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 10, name: 'Brr Brr Patapim', type: 'Bloodmoon', rarity: 'Epic', emoji: '🌵', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 11, name: 'Il Cacto Hipoptamo', type: 'Bloodmoon', rarity: 'Epic', emoji: '🌵', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 12, name: 'Cappuccino Assassino', type: 'Bloodmoon', rarity: 'Epic', emoji: '🍵', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 13, name: 'Frigo Camelo', type: 'Bloodmoon', rarity: 'Epic', emoji: '🐫', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 14, name: 'Unkown Brainrot', type: 'Bloodmoon', rarity: 'Epic', emoji: '❔', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 15, name: 'Svinino Bombodino', type: 'Bloodmoon', rarity: 'Legendary', emoji: '🦏', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: 180},
{ id: 16, name: 'Tatata Sahur', type: 'Bloodmoon', rarity: 'Legendary', emoji: '🫖', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 17, name: 'Chimpanzini Bananini', type: 'Bloodmoon', rarity: 'Legendary', emoji: '🍌', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: 115},
{ id: 18, name: 'Zombie Orcalero Orcala', type: 'Bloodmoon', rarity: 'Legendary', emoji: '🧟', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 19, name: 'Unkown Brainrot', type: 'Bloodmoon', rarity: 'Legendary', emoji: '❔', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: "x"},
{ id: 20, name: 'Pipi Kiwi', type: 'Bloodmoon', rarity: 'Legendary', emoji: '🥝', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: 175},
{ id: 21, name: 'Lirili Larila', type: 'Bloodmoon', rarity: 'Legendary', emoji: '🐘', mutation: 'Bloodmoon', mutationBonus: 250, baseIncome: 135},

// Galaxy Brainrot Mutations
{ id: 1, name: 'Gangster Footera', type: 'Galaxy', rarity: 'Basic', emoji: '👣', mutation: 'Galaxy', mutationBonus: 300, baseIncome: 25 },
{ id: 2, name: 'Frulli Frulla', type: 'Galaxy', rarity: 'Basic', emoji: '🌀', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 3, name: 'Trulimero Trulichina', type: 'Galaxy', rarity: 'Basic', emoji: '🎭', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 4, name: 'Trippi Troppi', type: 'Galaxy', rarity: 'Basic', emoji: '🤪', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 5, name: 'Boneca Ambalabu', type: 'Galaxy', rarity: 'Rare', emoji: '💀', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 6, name: 'Ballerina Cappuccina', type: 'Galaxy', rarity: 'Rare', emoji: '💃', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 7, name: 'Bananita Dolfinita', type: 'Galaxy', rarity: 'Rare', emoji: '🍌', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 8, name: 'Tung Tung Tung Sahur', type: 'Galaxy', rarity: 'Rare', emoji: '🥁', mutation: 'Galaxy', mutationBonus: 300, baseIncome: 30},
{ id: 9, name: 'U Din Din Din', type: 'Galaxy', rarity: 'Epic', emoji: '🟡', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 10, name: 'Brr Brr Patapim', type: 'Galaxy', rarity: 'Epic', emoji: '🌵', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 11, name: 'Il Cacto Hipoptamo', type: 'Galaxy', rarity: 'Epic', emoji: '🌵', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 12, name: 'Cappuccino Assassino', type: 'Galaxy', rarity: 'Epic', emoji: '🍵', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 13, name: 'Frigo Camelo', type: 'Galaxy', rarity: 'Epic', emoji: '🐫', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 14, name: 'Unkown Brainrot', type: 'Galaxy', rarity: 'Epic', emoji: '❔', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 15, name: 'Svinino Bombodino', type: 'Galaxy', rarity: 'Legendary', emoji: '🦏', mutation: 'Galaxy', mutationBonus: 300, baseIncome: 180},
{ id: 16, name: 'Tatata Sahur', type: 'Galaxy', rarity: 'Legendary', emoji: '🫖', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 17, name: 'Chimpanzini Bananini', type: 'Galaxy', rarity: 'Legendary', emoji: '🍌', mutation: 'Galaxy', mutationBonus: 300, baseIncome: 115},
{ id: 18, name: 'Zombie Orcalero Orcala', type: 'Galaxy', rarity: 'Legendary', emoji: '🧟', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 19, name: 'Unkown Brainrot', type: 'Galaxy', rarity: 'Legendary', emoji: '❔', mutation: 'Galaxy', mutationBonus: 300, baseIncome: "x"},
{ id: 20, name: 'Pipi Kiwi', type: 'Galaxy', rarity: 'Legendary', emoji: '🥝', mutation: 'Galaxy', mutationBonus: 300, baseIncome: 175},
{ id: 21, name: 'Lirili Larila', type: 'Galaxy', rarity: 'Legendary', emoji: '🐘', mutation: 'Galaxy', mutationBonus: 300, baseIncome: 135},

// Blackhole brainrot mutations
{ id: 1, name: 'Gangster Footera', type: 'Blackhole', rarity: 'Basic', emoji: '👣', mutation: 'Blackhole', mutationBonus: 350, baseIncome: 25 },
{ id: 2, name: 'Frulli Frulla', type: 'Blackhole', rarity: 'Basic', emoji: '🌀', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 3, name: 'Trulimero Trulichina', type: 'Blackhole', rarity: 'Basic', emoji: '🎭', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 4, name: 'Trippi Troppi', type: 'Blackhole', rarity: 'Basic', emoji: '🤪', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 5, name: 'Boneca Ambalabu', type: 'Blackhole', rarity: 'Rare', emoji: '💀', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 6, name: 'Ballerina Cappuccina', type: 'Blackhole', rarity: 'Rare', emoji: '💃', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 7, name: 'Bananita Dolfinita', type: 'Blackhole', rarity: 'Rare', emoji: '🍌', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 8, name: 'Tung Tung Tung Sahur', type: 'Blackhole', rarity: 'Rare', emoji: '🥁', mutation: 'Blackhole', mutationBonus: 350, baseIncome: 30},
{ id: 9, name: 'U Din Din Din', type: 'Blackhole', rarity: 'Epic', emoji: '🟡', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 10, name: 'Brr Brr Patapim', type: 'Blackhole', rarity: 'Epic', emoji: '🌵', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 11, name: 'Il Cacto Hipoptamo', type: 'Blackhole', rarity: 'Epic', emoji: '🌵', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 12, name: 'Cappuccino Assassino', type: 'Blackhole', rarity: 'Epic', emoji: '🍵', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 13, name: 'Frigo Camelo', type: 'Blackhole', rarity: 'Epic', emoji: '🐫', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 14, name: 'Unkown Brainrot', type: 'Blackhole', rarity: 'Epic', emoji: '❔', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 15, name: 'Svinino Bombodino', type: 'Blackhole', rarity: 'Legendary', emoji: '🦏', mutation: 'Blackhole', mutationBonus: 350, baseIncome: 180},
{ id: 16, name: 'Tatata Sahur', type: 'Blackhole', rarity: 'Legendary', emoji: '🫖', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 17, name: 'Chimpanzini Bananini', type: 'Blackhole', rarity: 'Legendary', emoji: '🍌', mutation: 'Blackhole', mutationBonus: 350, baseIncome: 115},
{ id: 18, name: 'Zombie Orcalero Orcala', type: 'Blackhole', rarity: 'Legendary', emoji: '🧟', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 19, name: 'Unkown Brainrot', type: 'Blackhole', rarity: 'Legendary', emoji: '❔', mutation: 'Blackhole', mutationBonus: 350, baseIncome: "x"},
{ id: 20, name: 'Pipi Kiwi', type: 'Blackhole', rarity: 'Legendary', emoji: '🥝', mutation: 'Blackhole', mutationBonus: 350, baseIncome: 175},
{ id: 21, name: 'Lirili Larila', type: 'Blackhole', rarity: 'Legendary', emoji: '🐘', mutation: 'Blackhole', mutationBonus: 350, baseIncome: 135},

// Halloween brainrot mutations
{ id: 1, name: 'Gangster Footera', type: 'Halloween', rarity: 'Basic', emoji: '👣', mutation: 'Halloween', mutationBonus: 450, baseIncome: 25 },
{ id: 2, name: 'Frulli Frulla', type: 'Halloween', rarity: 'Basic', emoji: '🌀', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 3, name: 'Trulimero Trulichina', type: 'Halloween', rarity: 'Basic', emoji: '🎭', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 4, name: 'Trippi Troppi', type: 'Halloween', rarity: 'Basic', emoji: '🤪', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 5, name: 'Boneca Ambalabu', type: 'Halloween', rarity: 'Rare', emoji: '💀', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 6, name: 'Ballerina Cappuccina', type: 'Halloween', rarity: 'Rare', emoji: '💃', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 7, name: 'Bananita Dolfinita', type: 'Halloween', rarity: 'Rare', emoji: '🍌', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 8, name: 'Tung Tung Tung Sahur', type: 'Halloween', rarity: 'Rare', emoji: '🥁', mutation: 'Halloween', mutationBonus: 450, baseIncome: 30},
{ id: 9, name: 'U Din Din Din', type: 'Halloween', rarity: 'Epic', emoji: '🟡', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 10, name: 'Brr Brr Patapim', type: 'Halloween', rarity: 'Epic', emoji: '🌵', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 11, name: 'Il Cacto Hipoptamo', type: 'Halloween', rarity: 'Epic', emoji: '🌵', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 12, name: 'Cappuccino Assassino', type: 'Halloween', rarity: 'Epic', emoji: '🍵', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 13, name: 'Frigo Camelo', type: 'Halloween', rarity: 'Epic', emoji: '🐫', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 14, name: 'Unkown Brainrot', type: 'Halloween', rarity: 'Epic', emoji: '❔', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 15, name: 'Svinino Bombodino', type: 'Halloween', rarity: 'Legendary', emoji: '🦏', mutation: 'Halloween', mutationBonus: 450, baseIncome: 180},
{ id: 16, name: 'Tatata Sahur', type: 'Halloween', rarity: 'Legendary', emoji: '🫖', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 17, name: 'Chimpanzini Bananini', type: 'Halloween', rarity: 'Legendary', emoji: '🍌', mutation: 'Halloween', mutationBonus: 450, baseIncome: 115},
{ id: 18, name: 'Zombie Orcalero Orcala', type: 'Halloween', rarity: 'Legendary', emoji: '🧟', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 19, name: 'Unkown Brainrot', type: 'Halloween', rarity: 'Legendary', emoji: '❔', mutation: 'Halloween', mutationBonus: 450, baseIncome: "x"},
{ id: 20, name: 'Pipi Kiwi', type: 'Halloween', rarity: 'Legendary', emoji: '🥝', mutation: 'Halloween', mutationBonus: 450, baseIncome: 175},
{ id: 21, name: 'Lirili Larila', type: 'Halloween', rarity: 'Legendary', emoji: '🐘', mutation: 'Halloween', mutationBonus: 450, baseIncome: 135},

// Yin Yang brainrot mutations
{ id: 1, name: 'Gangster Footera', type: 'Yin Yang', rarity: 'Basic', emoji: '👣', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: 25 },
{ id: 2, name: 'Frulli Frulla', type: 'Yin Yang', rarity: 'Basic', emoji: '🌀', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 3, name: 'Trulimero Trulichina', type: 'Yin Yang', rarity: 'Basic', emoji: '🎭', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 4, name: 'Trippi Troppi', type: 'Yin Yang', rarity: 'Basic', emoji: '🤪', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 5, name: 'Boneca Ambalabu', type: 'Yin Yang', rarity: 'Rare', emoji: '💀', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 6, name: 'Ballerina Cappuccina', type: 'Yin Yang', rarity: 'Rare', emoji: '💃', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 7, name: 'Bananita Dolfinita', type: 'Yin Yang', rarity: 'Rare', emoji: '🍌', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 8, name: 'Tung Tung Tung Sahur', type: 'Yin Yang', rarity: 'Rare', emoji: '🥁', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: 30},
{ id: 9, name: 'U Din Din Din', type: 'Yin Yang', rarity: 'Epic', emoji: '🟡', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 10, name: 'Brr Brr Patapim', type: 'Yin Yang', rarity: 'Epic', emoji: '🌵', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 11, name: 'Il Cacto Hipoptamo', type: 'Yin Yang', rarity: 'Epic', emoji: '🌵', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 12, name: 'Cappuccino Assassino', type: 'Yin Yang', rarity: 'Epic', emoji: '🍵', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 13, name: 'Frigo Camelo', type: 'Yin Yang', rarity: 'Epic', emoji: '🐫', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 14, name: 'Unkown Brainrot', type: 'Yin Yang', rarity: 'Epic', emoji: '❔', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 15, name: 'Svinino Bombodino', type: 'Yin Yang', rarity: 'Legendary', emoji: '🦏', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: 180},
{ id: 16, name: 'Tatata Sahur', type: 'Yin Yang', rarity: 'Legendary', emoji: '🫖', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 17, name: 'Chimpanzini Bananini', type: 'Yin Yang', rarity: 'Legendary', emoji: '🍌', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: 115},
{ id: 18, name: 'Zombie Orcalero Orcala', type: 'Yin Yang', rarity: 'Legendary', emoji: '🧟', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 19, name: 'Unkown Brainrot', type: 'Yin Yang', rarity: 'Legendary', emoji: '❔', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: "x"},
{ id: 20, name: 'Pipi Kiwi', type: 'Yin Yang', rarity: 'Legendary', emoji: '🥝', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: 175},
{ id: 21, name: 'Lirili Larila', type: 'Yin Yang', rarity: 'Legendary', emoji: '🐘', mutation: 'Yin Yang', mutationBonus: 500, baseIncome: 135},

// Extinct Brainrot Mutations
{ id: 1, name: 'Gangster Footera', type: 'Extinct', rarity: 'Basic', emoji: '👣', mutation: 'Extinct', mutationBonus: 550, baseIncome: 25 },
{ id: 2, name: 'Frulli Frulla', type: 'Extinct', rarity: 'Basic', emoji: '🌀', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 3, name: 'Trulimero Trulichina', type: 'Extinct', rarity: 'Basic', emoji: '🎭', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 4, name: 'Trippi Troppi', type: 'Extinct', rarity: 'Basic', emoji: '🤪', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 5, name: 'Boneca Ambalabu', type: 'Extinct', rarity: 'Rare', emoji: '💀', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 6, name: 'Ballerina Cappuccina', type: 'Extinct', rarity: 'Rare', emoji: '💃', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 7, name: 'Bananita Dolfinita', type: 'Extinct', rarity: 'Rare', emoji: '🍌', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 8, name: 'Tung Tung Tung Sahur', type: 'Extinct', rarity: 'Rare', emoji: '🥁', mutation: 'Extinct', mutationBonus: 550, baseIncome: 30},
{ id: 9, name: 'U Din Din Din', type: 'Extinct', rarity: 'Epic', emoji: '🟡', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 10, name: 'Brr Brr Patapim', type: 'Extinct', rarity: 'Epic', emoji: '🌵', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 11, name: 'Il Cacto Hipoptamo', type: 'Extinct', rarity: 'Epic', emoji: '🌵', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 12, name: 'Cappuccino Assassino', type: 'Extinct', rarity: 'Epic', emoji: '🍵', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 13, name: 'Frigo Camelo', type: 'Extinct', rarity: 'Epic', emoji: '🐫', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 14, name: 'Unkown Brainrot', type: 'Extinct', rarity: 'Epic', emoji: '❔', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 15, name: 'Svinino Bombodino', type: 'Extinct', rarity: 'Legendary', emoji: '🦏', mutation: 'Extinct', mutationBonus: 550, baseIncome: 180},
{ id: 16, name: 'Tatata Sahur', type: 'Extinct', rarity: 'Legendary', emoji: '🫖', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 17, name: 'Chimpanzini Bananini', type: 'Extinct', rarity: 'Legendary', emoji: '🍌', mutation: 'Extinct', mutationBonus: 550, baseIncome: 115},
{ id: 18, name: 'Zombie Orcalero Orcala', type: 'Extinct', rarity: 'Legendary', emoji: '🧟', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 19, name: 'Unkown Brainrot', type: 'Extinct', rarity: 'Legendary', emoji: '❔', mutation: 'Extinct', mutationBonus: 550, baseIncome: "x"},
{ id: 20, name: 'Pipi Kiwi', type: 'Extinct', rarity: 'Legendary', emoji: '🥝', mutation: 'Extinct', mutationBonus: 550, baseIncome: 175},
{ id: 21, name: 'Lirili Larila', type: 'Extinct', rarity: 'Legendary', emoji: '🐘', mutation: 'Extinct', mutationBonus: 550, baseIncome: 135},
  ];

  const getFilteredBrainrots = (): Brainrot[] => {
    if (selectedMutation) {
      // For now, return all brainrots that match the mutation name
      // In a complete implementation, you'd filter by mutation type
      return brainrotsData.filter(brainrot => 
        brainrot.mutation === selectedMutation.name
      );
    }
    return brainrotsData;
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'mutations':
        return (
          <Mutations 
            mutations={mutationsData}
            selectedMutation={selectedMutation}
            onSelectMutation={(mutation: Mutation) => {
              setSelectedMutation(mutation);
              setActiveSection('brainrots');
            }}
          />
        );
      case 'brainrots':
        return (
          <Brainrots 
            brainrots={getFilteredBrainrots()}
            selectedBrainrot={selectedBrainrot}
            onSelectBrainrot={(brainrot: Brainrot) => {
              setSelectedBrainrot(brainrot);
              setActiveSection('details');
            }}
            currentMutation={selectedMutation}
          />
        );
      case 'details':
        return <BrainrotDetails brainrot={selectedBrainrot} />;
      default:
        return (
          <Mutations 
            mutations={mutationsData}
            selectedMutation={selectedMutation}
            onSelectMutation={setSelectedMutation}
          />
        );
    }
  };

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
    </div>
  );
}
