import { NextPage } from "next";
import Layout from "../../components/layout";
import ChatPost from "@/components/chatPost";

const Chats: NextPage = () => {
  return (
    <div className="py-10 divide-y-[1px]">
      <Layout title="채팅" hasTabBar>
        {[1, 2, 3, 4, 5].map((_, i) => (
          <ChatPost key={i}></ChatPost>
        ))}
      </Layout>
    </div>
  );
};

export default Chats;
