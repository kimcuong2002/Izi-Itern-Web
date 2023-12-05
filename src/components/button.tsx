import { FC } from "react";

type Props = {
  buttonName?: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({ buttonName, onClick }) => {
  return (
    <button
      className="text-sm lg:text-base !text-bold border-2 border-[#78909C] py-3 px-10 text-[#78909C] hover:bg-[#78909C] hover:text-white"
      onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;
