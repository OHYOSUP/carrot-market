import Chat from '../../components/chat'
import { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <Chat message ="안녕하세요. 혹시 아직 판매 하시나요?"></Chat>
      <Chat message = "네 아직 판매 합니다" reverse></Chat>
      <Chat message ="오늘 구매하고 싶은데 가능하실까요?"></Chat>
      <Chat message ="네네 가능합니다. 어디가 좋으신가요?" reverse></Chat>
      <Chat message ="강남역 사거리 6시에 괜찮으실까요?"></Chat>
      <Chat message ="네네 가능합니다" reverse></Chat>
      <Chat message ="넵, 그럽 그때 뵐게요!"></Chat>
      <Chat message ="알겠습니다 :)" reverse></Chat>

      
      <div className= "fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
        <div className="flex relative items-center">
          <input type="text" className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500" />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex items-center bg-orange-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:bg-orange-600 cursor-pointer rounded-full px-3 text-sm text-white">&rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
