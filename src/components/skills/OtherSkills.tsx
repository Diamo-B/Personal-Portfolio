import AnimatedText from "../AnimatedWrittenText";

type Props = {
    textAnimation: boolean;
};

const OtherSkills = ({ textAnimation }: Props) => {
    const introText =
        "My knowledge and skills extend beyond coding, encompassing areas such as DevOps, system administration, management, testing, computer maintenance, and more";
    return (
        <div className=" 2xl:transform 2xl:scale-125">
            {textAnimation && (
                <AnimatedText
                    text={introText}
                    colorSuffix="white"
                    sizeSuffix="lg"
                    cursorHeight="h-5"
                />
            )}
            <div className="max-h-full grid grid-cols-4 justify-items-center mt-5 h-fit gap-2 ">
                <div className="flex justify-evenly">
                    <div className="h-36 w-32 bg-white rounded-2xl flex flex-col py-3 items-center ">
                        <img className="w-24" src="/docker.svg" alt="" />
                        <h1 className="font-bold text-sm text-center">
                            Docker
                        </h1>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <div className="h-36 w-32 bg-white rounded-2xl flex flex-col items-center px-2 py-3">
                        <img className="w-20" src="/archLinux.svg" alt="" />
                        <h1 className="font-bold text-sm text-center">
                            bash/zsh & linux administration
                        </h1>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <div className="h-36 px-2 w-32 bg-white rounded-2xl flex flex-col pt-3 items-center justify-center gap-2">
                        <div className="flex justify-center ">
                            <img
                                className="w-16"
                                src="/raspberryPi.svg"
                                alt=""
                            />
                            <img className="w-16" src="/arduino.svg" alt="" />
                        </div>
                        <h1 className="font-bold text-sm text-center">
                            embedded systems
                        </h1>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <div className="h-36 w-32 bg-white rounded-2xl flex flex-col items-center py-5 gap-2">
                        <img className="w-20 ml-3" src="/jest.svg" alt="" />
                        <h1 className="font-bold text-sm text-center">
                            Unit Testing
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherSkills;
