export interface Ingredient {
  item: string;
  quantity: number;
}

export interface CraftingItem {
  id: string;
  name: string;
  category: 'tool' | 'weapon' | 'base' | 'consumable' | 'material';
  ingredients: Ingredient[];
  description?: string;
}

export const items: CraftingItem[] = [
  {
    id: 'stone_axe',
    name: '石の斧',
    category: 'tool',
    ingredients: [
      { item: '石材', quantity: 2 },
      { item: '木材', quantity: 2 },
      { item: '植物繊維', quantity: 5 },
    ],
    description: '基本的な伐採ツール',
  },
  {
    id: 'wooden_club',
    name: '木製棍棒',
    category: 'weapon',
    ingredients: [{ item: '木材', quantity: 15 }],
    description: '初期の近接武器',
  },
  {
    id: 'campfire',
    name: '焚き火',
    category: 'base',
    ingredients: [
      { item: '石材', quantity: 5 },
      { item: '木材', quantity: 5 },
    ],
    description: '料理や保温に必要',
  },
  {
    id: 'bandage',
    name: '包帯',
    category: 'consumable',
    ingredients: [{ item: '布', quantity: 1 }],
    description: '出血を止めるための基本アイテム',
  },
  {
    id: 'iron_axe',
    name: '鉄の斧',
    category: 'tool',
    ingredients: [
      { item: '鉄のインゴット', quantity: 5 },
      { item: '木材', quantity: 2 },
      { item: '植物繊維', quantity: 5 },
    ],
    description: '効率的な伐採ツール',
  },
];
