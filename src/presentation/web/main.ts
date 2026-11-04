import { listAllFranchises } from '../../application/listAllFranchises';

const franchises = listAllFranchises();
const root = document.querySelector<HTMLDivElement>('#root');

if (!root) throw new Error('Root element not found.');

const ul = document.createElement('ul');

franchises.forEach(franchise => {
  const li = document.createElement('li');
  li.textContent = franchise.name;
  ul.append(li);
});

root.append(ul);
