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
          size="text-sm lg:text-lg"
          cursorHeight="h-5"
        />
      }
      <div className=" lg:max-h-full grid grid-cols-2 lg:grid-cols-5 justify-items-center mt-5 h-auto lg:h-fit gap-2">
        <div className="col-span-2 lg:col-span-5 w-full flex justify-evenly">
          <div className="h-32 w-32 bg-white px-4 py-2 rounded-2xl flex flex-col justify-center items-center gap-1">
            <img className="w-16" src="/Vite.svg" alt="" />
            <h1 className="font-bold">Vite</h1>
          </div>
          <div className="h-32 w-32 bg-white px-4 py-2 rounded-2xl flex flex-col justify-center items-center">
            <img className="w-20" src="/react.svg" alt="" />
            <h1 className="font-bold">ReactTs</h1>
          </div>
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
        <div className="flex justify-evenly col-span-2 lg:col-span-1">
          <div className="h-36 w-32 bg-white rounded-2xl flex flex-col items-center py-5 gap-1">
            <img className="w-20" src="/framerMotion.svg" alt="" />
            <h1 className="font-bold text-sm text-center">Framer Motion</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
