import { MouseEventHandler } from "react";

interface SubmitButtonProps{
    title: string;
    buttonStyle: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

export const SubmitButton: React.FC<SubmitButtonProps> = ({ title, onClick , buttonStyle}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    // Do something when the button is clicked
    console.log('Button clicked!');
    onClick(event); // Call the onClick prop function
  };

  return (
      <button
          className={
          buttonStyle ? buttonStyle : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        }
         onClick={handleClick}>
      {title ||   'Create New Blog'}
    </button>
  );
};