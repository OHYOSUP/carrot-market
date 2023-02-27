import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-5 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between mt-5">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">19$</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">19$</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2">
          <span>Total</span>
          <span className="font-semibold">10$</span>
        </div>
        <div className="bg-blue-500 mt-5 text-white p-3 text-center rounded-xl w-2/4 mx-auto">
          <span>Checkout</span>
        </div>
      </div>

      <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl relative -top-5 p-6 bg-white font-semibold">
          <div className="flex relative -top-16 justify-between text-center items-end">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium ">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full"></div>
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
      <div className="bg-white p-10 rounded-3xl shadow-xl">
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
          <div>
            <input type="radio"></input>
            <input type="radio"></input>
            <input type="radio"></input>
          </div>
          <div className="flex items-center space-x-5">
            <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">-</button>
            <button>1</button>
            <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">+</button>
          </div>
        </div>
        <div className= "flex justify-between items-center">
          <span className="font-medium text-2xl">$450</span>
          <button className="bg-blue-500 text-center text-white rounded-lg p-2 px-8 text-xs">Add to cart</button>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
    </div>
  );
};

export default Home;
