import { cls } from "../libs/utils";

interface ButtonProps {
  text: string;
  large?: false;
}

export default function Button({ text, large }: ButtonProps) {
  return (
    <button
      className={cls(
        "w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 border border-tansparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none, ",
        large ? "py-2 text-base" : "py-3 text-sm"
      )}
    >
      {text}
    </button>
  );
}
