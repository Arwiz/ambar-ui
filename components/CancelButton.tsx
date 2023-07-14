import { XMarkIcon } from '@heroicons/react/24/solid'
import { ReactNode } from 'react';

interface CancelButtonProps {
    onClick: () => void;
    title: string;
}

export const CancelButton: React.FC<CancelButtonProps> = ({ onClick, title }) => {
  return (
    <button
      className="flex items-center bg-red-500 text-white rounded-lg px-1 py-1 h-5 w-5"
      onClick={onClick}
    >
          <XMarkIcon className="h-5 w-5 mr-2" />
          {title}
    </button>
  );
};


interface IconButtonProps {
  icon: ReactNode;
  onClick: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon= <XMarkIcon/>, onClick }) => {
  return (
    <button
      className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white focus:outline-none"
      onClick={onClick}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {icon}
      </svg>
    </button>
  );
};

