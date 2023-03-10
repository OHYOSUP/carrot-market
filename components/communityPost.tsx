


export default function CommunityPost() {
  return (
    <div className="flex flex-col items-start cursor-pointer">
      <span className="px-2.5 py-0.5 flex items-center bg-slate-100 ml-3 text-gray-800 rounded-full text-xs font-medium">
        동네질문
      </span>
      <div className="mt-2 text-gray-700 font-bold">
        <span className="text-orange-500 font-medium">Q.</span> What is the best
        mandu restaurant?
      </div>
      <div className="py-4 p-3 w-full mt-3 flex items-center justify-between text-gray-500 font-medium text-xs">
        <span>니꼬</span>
        <span className="font-bold">18시간 전</span>
      </div>
      <div className="flex space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[3px] w-full">
        <span className="flex space-x-2 items-center text-sm">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>궁금해요 1</span>
        </span>
        <span className="flex space-x-2 items-center text-sm">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
          <span>답변 1</span>
        </span>
      </div>
    </div>
  );
}
