import {cls} from '../libs/utils'

interface ButtonProps {
  text: string;

}

export default function button() {
  return (
    <button className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-tansparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
      Post
    </button>
  );
}
