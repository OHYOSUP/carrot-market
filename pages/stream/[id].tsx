import Layout from "@/components/Layout";
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
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <p className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
            미쳤어
          </p>
        </div>
        <div className="flex flex-row-reverse items-start space-x-reverse space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <p className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
            Hi how much are you selling them for?
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <p className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
            미쳤어
          </p>
        </div>
        <div className="flex flex-row-reverse items-start space-x-reverse space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <p className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
            Hi how much are you selling them for?
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <p className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
            미쳤어
          </p>
        </div>
        <div className="flex flex-row-reverse items-start space-x-reverse space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <p className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
            Hi how much are you selling them for?
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <p className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
            미쳤어
          </p>
        </div>
        <div className="flex flex-row-reverse items-start space-x-reverse space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <p className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
            Hi how much are you selling them for?
          </p>
        </div>
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
