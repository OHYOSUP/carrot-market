import Button from "@/components/button";
import Textarea from "@/components/textarea";
import { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <Textarea placeholder="질문을 입력해 주세요"></Textarea>
      <Button text="Post"></Button>
    </form>
  );
};

export default Write;
