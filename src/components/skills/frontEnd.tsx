import AnimatedText from "../AnimatedWrittenText";
type Props = {
  textAnimation: boolean;
}

const FrontEnd = ({textAnimation}: Props) => {
    const introText = "I am primarily a react developer, has experience building projects with reactJs for over a year now and this is a part of my front-end tools";
  return (
    <div>
      {
        textAnimation &&
        <AnimatedText
          text={introText}
          colorSuffix="white"
          sizeSuffix="lg"
          cursorHeight="h-5"
        />
      }
      <div className="max-h-full grid grid-cols-5 justify-items-center mt-5 h-fit gap-2">
        <div className="h-32 w-32 bg-white px-4 py-2 rounded-2xl flex flex-col justify-center items-center col-span-5">
          <img className="w-20" src="/react.svg" alt="" />
          <h1 className="font-bold">ReactTs</h1>
        </div>
        <div className="flex justify-evenly">
          <div className="h-36 w-32 bg-white px-4 py-2 rounded-2xl flex flex-col justify-center items-center gap-5">
            <img className="w-20" src="/react-router-dom.svg" alt="" />
            <h1 className="font-bold text-sm text-center">
              React-Router-dom V6
            </h1>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="h-36 w-32 bg-white rounded-2xl flex flex-col py-4 items-center gap-3">
            <img className="w-20" src="/redux.svg" alt="" />
            <h1 className="font-bold text-sm text-center">Redux Toolkit</h1>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="h-36 w-32 bg-white rounded-2xl flex flex-col py-8 items-center gap-6">
            <img className="w-20" src="/tailwindcss.svg" alt="" />
            <h1 className="font-bold text-sm text-center">Tailwindcss</h1>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="h-36 w-32 bg-white rounded-2xl flex flex-col items-center py-5 gap-1">
            <img className="w-20" src="/rhf.svg" alt="" />
            <h1 className="font-bold text-sm text-center">React Hook Form</h1>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="h-36 w-32 bg-white rounded-2xl flex flex-col items-center py-5 gap-1">
            <img className="w-20" src="/framerMotion.svg" alt="" />
            <h1 className="font-bold text-sm text-center">Framer Motion</h1>
          </div>
        </div>
      </div>
      <p className="col-span-5 text-center mt-5 font-bold text-xl text-white">
        And there's more ...
      </p>
    </div>
  );
};

export default FrontEnd;
