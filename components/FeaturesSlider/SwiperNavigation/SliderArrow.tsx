import { Icon } from "@/components/UI/Icon/Icon";
import cn from "classnames";

type Props = {
  isReversed?: boolean;
  className?: string;
  onClick: () => void;
};

function SliderArrow({ onClick, isReversed = false, className }: Props) {
  return (
    <button
      type="button"
      className={cn(
        "flex-shrink-0 transition-opacity duration-300 hover:opacity-60",
        isReversed && "relative rotate-180",
        className
      )}
      onClick={onClick}
      aria-label="navigation"
    >
      <div className="w-[40px] h-[40px] bg-black_1 flex justify-center items-center rounded-[50%]">
        <Icon size={20} icon="arrow" color="#fff" />
      </div>
    </button>
  );
}

export default SliderArrow;
