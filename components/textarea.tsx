interface TextareaProps {
  label?: string;
  name?: string;
  placeholder: string;
}

export default function Textarea({ label, name, placeholder }: TextareaProps) {
  return (
    <>
      {label ? (
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      ) : null}
      <textarea
        placeholder={placeholder}
        className="mt-1 shadow-sm w-full focus:ring-1 focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        rows={4}
      />
    </>
  );
}
