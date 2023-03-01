import Chat from "@/components/chat";
import Layout from "@/components/layout";
import { NextPage } from "next";

const StreamDetail: NextPage = () => {
  return (
    <Layout hasTabBar title="라이브">
    <div className="py-10 px-4 space-y-4">
      <div className="w-full bg-slate-300 aspect-video"></div>
      <h3 className="text-gray-700 text-2xl font-semibold mt-2">
        Let's make a deal
      </h3>
      <div className="py-10 pb-16 h-[50vh] overflow-y-scroll px-4 space-y-4">
        <Chat message="와우 이거 얼마인가요?" reverse></Chat>
        <Chat message="혹시 사고 마음에 안들면 교환 환불 가능한가요?" reverse></Chat>
        <Chat message="이거 다음주에 사고싶은데 언제까지 판매하나요?" reverse></Chat>
        <Chat message="세일 언제까지하나요? 재방도 하시나요?" reverse></Chat>
        <Chat message="이쁘다 사고싶당" reverse></Chat>
        <Chat message="좋아요 누르고 갑니다~~~" reverse></Chat>
      </div>
      <div className= "fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
        <div className="flex relative items-center">
          <input type="text" className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500" />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex items-center bg-orange-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:bg-orange-600 cursor-pointer rounded-full px-3 text-sm text-white">&rarr;</button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default StreamDetail;
