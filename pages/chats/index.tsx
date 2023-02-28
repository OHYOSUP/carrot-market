import { NextPage } from "next";
import Layout from "../../components/Layout";

const Chats: NextPage = () => {
  return (
    <div className="py-10 divide-y-[1px]">
      <Layout title="채팅" hasTabBar>
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div
            key={i}
            className="flex mb-3 px-4 items-center space-x-3 py-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-slate-300" />
            <div>
              <p className="font-medium text-gray-700">Steve Jebs</p>
              <p className="text-sm text-gray-500">
                See you tomorrow in the corner at 2px!
              </p>
            </div>
          </div>
        ))}
      </Layout>
    </div>
  );
};

export default Chats;
