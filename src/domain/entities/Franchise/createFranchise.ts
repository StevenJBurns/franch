import type { Franchise } from './Franchise';

export const createFranchise = (id: string, name: string): Franchise => {
  return {
    id,
    name,
  };
};
