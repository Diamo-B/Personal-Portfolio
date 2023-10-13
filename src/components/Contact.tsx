import { UilArrowRight, UilTimesCircle } from '@iconscout/react-unicons'
import {RefObject} from 'react'
type Props = {
    parentRef: RefObject<HTMLDivElement|null>
}
const Contact = ({parentRef}:Props) => {
    return (
        <div className=' bg-white w-fit px-5 py-5 rounded-xl flex flex-col gap-5 lg:w-full lg:flex-row lg:justify-center lg:items-center lg:gap-2 lg:mt-5 lg:py-0'>
            <UilTimesCircle className='ml-auto lg:hidden'
                onClick={()=>{
                    parentRef.current !== null && parentRef.current.classList.add("hidden")            
                }}
            />
            <a
                className="w-fit lg:w-42 bg-slate-900 border-2 border-slate-900 rounded-full text-white font-bold lg:font-normal text-lg font-Roboto-mono lg:font-itim px-5 py-1 flex items-center justify-center gap-1 lg:gap-0 hover:cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    
                    // Check if it's a mobile device
                    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                
                    if (isMobile) {
                      // Open Gmail app with a new message
                      window.location.href = "googlegmail://co?to=elkarni.bachar@gmail.com";
                    } else {
                      // Open Gmail website
                      window.open("https://mail.google.com/mail/?view=cm&to=elkarni.bachar@gmail.com", "_blank");
                    }
                  }}
                target="__blank"
            >
                Contact Me <UilArrowRight className="inline" />
            </a>
            <button className="w-42 rounded-full text-slate-900 border-2 border-slate-900 font-bold lg:font-normal text-lg font-Roboto-mono lg:font-itim px-5 py-1">
                Download CV
            </button>
            <div className='flex justify-center items-center gap-2'>
                <a
                    href="https://github.com/Diamo-B"
                    target="__blank"
                >
                    <img src="/github.svg" className='w-10' alt="github repo" />
                </a>
                <a
                    href="https://www.linkedin.com/in/bachar-elkarni/"
                    target="__blank"
                >
                    <img src="/linkedin.svg" className="w-14" alt="linkedin profile" />
                </a>
            </div>
        </div>
    );
};

export default Contact;
