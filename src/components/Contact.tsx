import { UilArrowRight } from '@iconscout/react-unicons'
import isMobile from '../helpers/checkIfMobile';
 
const Contact = () => {
    return (
        <div className='w-fit px-5 py-5 rounded-xl flex flex-col gap-5 lg:w-full lg:flex-row lg:justify-center lg:items-center lg:gap-2 lg:mt-5 lg:py-0'>
            <a
                className="w-42 bg-transparent lg:bg-slate-900 border-2 border-white lg:border-slate-900 rounded-full text-white font-bold lg:font-normal text-sm lg:text-lg font-Roboto-mono lg:font-itim px-5 py-1 flex items-center justify-center gap-1 lg:gap-0 hover:cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                      // Open Gmail website
                      window.open("https://mail.google.com/mail/?view=cm&to=elkarni.bachar@gmail.com", "_blank");
                  }}
                target="__blank"
            >
                Contact Me <UilArrowRight className="inline" />
            </a>
            <a className="w-42 rounded-full lg:text-slate-900 border-2 border-white lg:border-slate-900 font-bold lg:font-normal text-sm lg:text-lg font-Roboto-mono lg:font-itim px-5 py-1"
               href='/Elkarni-Bachar_CV.pdf' 
            >
                Download CV
            </a>
            <div className='flex justify-center items-center gap-2'>
                <a
                    href="https://github.com/Diamo-B"
                    target="__blank"
                >
                    <img src="/github.svg" className='w-10 bg-white rounded-full' alt="github repo" />
                </a>
                <a
                    href="https://www.linkedin.com/in/bachar-elkarni/"
                    target="__blank"
                >
                    {
                        isMobile()?
                            <img src="/linkedin-white.svg" className="w-10 bg-white rounded-lg" alt="linkedin profile" />
                        :
                            <img src="/linkedin.svg" className="w-14" alt="linkedin profile" />
                    }
                </a>
            </div>
        </div>
    );
};

export default Contact;
