export interface Brainrot {
  id: number;
  name: string;
  type: string;
  rarity: 'Basic' | 'Rare' | 'Epic' | 'Legendary';
  emoji: string;
  mutation: string | null;
  mutationBonus: number;
  baseIncome: number | string;
  level?: number;
}

export interface Mutation {
  id: number;
  name: string;
  emoji: string;
  bonus: number;
  brainrots: number[];
}

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
