type Props = {
    name: string;
    bgColor: string;
    textColor: string;
} 
const Pill = ({name, bgColor, textColor}:Props) => {
  return (
    <div className={`rounded-full font-bold text-xs ${textColor} ${bgColor} min-w-24 px-5 py-1`}>
      {name}
    </div>
  );
};

export default Pill;
