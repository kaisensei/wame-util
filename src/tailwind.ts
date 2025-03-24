import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

function twConcat(...classNames: string[]) {
  return classNames.filter((item) => item.trim() !== '').join(' ');
}

// twen overwrites the previous classNames
function twcn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { twConcat, twcn };
