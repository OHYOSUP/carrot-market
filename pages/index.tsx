import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 dark xl:place-content-center py-20 px-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className="bg-white dark:bg-black flex flex-col justify-center sm:bg-red-400 md:bg-teal-400 lg:bg-indigo-500 dark:text-white xl:bg-yellow-400 2xl:bg-pink-400 p-6 rounded-3xl shadow-xl">
        <span className="font-semibold dark:text-white text-2xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex justify-between my-2 first:bg-blue-50 odd:bg-blue-50 even:bg-yellow-50"
            >
              <span className="text-gray-500 dark:text-gray-100">Grey Chair</span>
              <span className="font-semibold dark:text-white">$19</span>
            </div>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button
          className="mt-5 block bg-blue-500 text-white p-3          
          text-center rounded-xl w-3/4 mx-auto 
          hover:bg-teal-500 hover:text-black
          dark:hover:bg-black dark:hover:text-white
          active:bg-yellow-500 focus:bg-red-500"
        >
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 portrait:bg-indigo-600 landscape:bg-teal-600 xl:pb-40 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl relative -top-5 p-6 bg-white font-semibold">
          <div className="flex relative -top-16 justify-between text-center items-end">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium ">340</span>
            </div>
            <div className="h-24 w-24 bg-gray-400 rounded-full group-hover:bg-red-300 transition-colors"></div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium ">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center mt-7 -mb-12 -top-16">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex justify-between items-center mb-5">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💗</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5"> </div>
        <div className="mt-3 flex flex-col text-xl">
          <span className="font-medium mb-1.5">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
        </div>
        <div className="flex justify-between mt-3 mb-5">
          <div className="space-x-2">
            <button className="w-5 h-5 rounded-full focus:ring-2 bg-yellow-500 ring-offset-2 ring-yellow-500 transition"></button>
            <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 bg-indigo-500 ring-offset-2 ring-indigo-500 transition"></button>
            <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 bg-teal-500 ring-offset-2 ring-teal-500 transition"></button>
          </div>
          <div className="flex items-center space-x-5">
            <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
              -
            </button>
            <button>1</button>
            <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-2xl">$450</span>
          <button className="bg-blue-500 text-center text-white rounded-lg p-2 px-8 text-xs">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
