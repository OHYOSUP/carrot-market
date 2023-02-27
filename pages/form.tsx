export default function form() {
  return (
    <form className="flex flex-col space-y-2 p-5">
      <input
        type="text"
        required
        placeholder="Username"
        className="border p-1 peer rounded-lg border-gray-500"
      ></input>
      <span className="hidden peer-invalid:block peer-invalid:text-red-500">
        this input is invalid
      </span>
      <span className="hidden peer-hover:block peer-invalid:text-teal-500">
        좋은선택!
      </span>
      <input type="submit" value="login" className="bg-white"></input>
    </form>
  );
}
