export interface Brainrot {
  id: number;
  name: string;
  type: string;
  rarity: 'Basic' | 'Rare';
  emoji: string;
  mutation: string | null;
  mutationBonus: number;
  baseIncome: number;
  level?: number;
}

export interface Mutation {
  id: number;
  name: string;
  emoji: string;
  bonus: number;
  brainrots: number[];
}

// ... rest of the interfaces remain the same
export interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export interface MutationsProps {
  mutations: Mutation[];
  selectedMutation: Mutation | null;
  onSelectMutation: (mutation: Mutation) => void;
}

export interface BrainrotsProps {
  brainrots: Brainrot[];
  selectedBrainrot: Brainrot | null;
  onSelectBrainrot: (brainrot: Brainrot) => void;
  currentMutation: Mutation | null;
}

export interface BrainrotDetailsProps {
  brainrot: Brainrot | null;
}