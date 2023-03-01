import React from "react";

export default function ChatPost() {
  return (
    <div className="flex mb-3 px-4 items-center space-x-3 py-3 cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-slate-300" />
      <div>
        <p className="font-medium text-gray-700">Steve Jebs</p>
        <p className="text-sm text-gray-500">
          See you tomorrow in the corner at 2px!
        </p>
      </div>
    </div>
  );
}
