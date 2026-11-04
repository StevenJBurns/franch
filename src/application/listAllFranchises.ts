import { createFranchise } from '../domain/entities/Franchise/createFranchise';

export const listAllFranchises = () => {
  return [
    createFranchise('star-wars', 'Star Wars'),
    createFranchise('harry-potter', 'Harry Potter'),
    createFranchise('marvel-cinematic-universe', 'Marvel Cinematic Universe'),
    createFranchise('lord-of-the-rings', 'Lord of the Rings'),
  ];
};
