type Props = {
  value: string;
  onChangeHandler: (event: string) => void;
  title: string;
  labelId: string;
  placeholder: string;
};

export default function InputLine({
  value,
  onChangeHandler,
  title,
  labelId,
  placeholder,
}: Props) {
  return (
    <div className="flex justify-between items-center">
      <label htmlFor={labelId}>{title}</label>
      <input
        id={labelId}
        type="text"
        className="h-full rounded-md border bg-transparent py-1 px-4 border-sky-900
         focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}