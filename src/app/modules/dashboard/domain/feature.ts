export type Quality = 'high' | 'medium' | 'low';
export type Parameter = {
  name: string;
  value: number;
  accumulatedValue: number;
};

export type Feature = {
  name: string; // Seam, Slot, Hole
  quality: Quality;
  parameters: Parameter[];
};
