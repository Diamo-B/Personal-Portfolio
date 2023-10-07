import AnimatedText from "../AnimatedWrittenText";

const Backend = () => {
    const introText = "I am well versed in the different backend principles, starting from http request till everything that has a relationship with microservices... And these are the backend frameworks I used before";
  return (
    <div>
      <AnimatedText
        text={introText}
        colorSuffix="white"
        sizeSuffix="lg"
        cursorHeight="h-5"
      />
      <div className="max-h-full grid grid-cols-4 justify-items-center mt-5 h-fit gap-2">
        <div className="flex justify-evenly">
          <div className="h-36 w-32 bg-white px-4 pt-1 rounded-2xl flex flex-col justify-center items-center gap-4">
            <img className="w-16" src="/springboot.svg" alt="" />
            <h1 className="font-bold text-sm text-center">
              Spring Boot
            </h1>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="h-36 w-32 bg-white rounded-2xl flex flex-col pt-7 items-center gap-3">
            <img className="w-52" src="/expressJs.svg" alt="" />
            <h1 className="font-bold text-sm text-center">
              ExpressJs
            </h1>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="h-36 w-32 bg-white rounded-2xl flex flex-col py-4 items-center gap-2">
            <img className="w-20" src="/nextJs.svg" alt="" />
            <h1 className="font-bold text-sm text-center">
              NextJs
            </h1>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="h-36 w-32 bg-white rounded-2xl flex flex-col items-center py-5 gap-2">
            <img className="w-20 ml-3" src="/dotnet.svg" alt="" />
            <h1 className="font-bold text-sm text-center">
              Asp.net
            </h1>
          </div>
        </div>
      </div>
      <p className="col-span-5 text-center mt-5 font-bold text-xl text-white">
        And there's more ...
      </p>
    </div>
  );
};

export default Backend;
