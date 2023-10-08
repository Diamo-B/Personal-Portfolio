import { UilArrowUp } from '@iconscout/react-unicons'
import useAutoScroll from '../helpers/autoScroll';

type Props = {
    idToGoTo: string,
    outline? : boolean
}
const ReturnToTop = ({idToGoTo, outline}:Props) => {
    const {scrollToSection} = useAutoScroll()
    return ( 
        <button className={`bg-white w-14 h-14 rounded-full flex justify-center items-center ${outline? "border-2 border-slate-700" : ""}`}
            onClick={()=>{return scrollToSection(idToGoTo)}}
        >
            <UilArrowUp className='w-10 h-10'/>
        </button>
    );
}
 
export default ReturnToTop;