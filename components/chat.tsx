import { cls } from "../libs/utils";

interface ChatProps {
  message: string;
  reverse?: boolean;
}

export default function Chat({ message, reverse }: ChatProps) {
  return (
    <div
      className={cls(
        "flex items-start",
        reverse ? "flex-row-reverse space-x-reverse space-x-2 text-right" : "space-x-2"
      )}
    >
      <div className="w-8 h-8 rounded-full bg-slate-400" />
      <p className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
        {message}
      </p>
    </div>
  );
}
