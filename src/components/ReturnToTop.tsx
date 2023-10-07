import { UilArrowUp } from '@iconscout/react-unicons'
import useAutoScroll from '../helpers/autoScroll';
const ReturnToTop = () => {
    const {scrollToSection} = useAutoScroll()
    return ( 
        <button className='bg-white w-14 h-14 rounded-full flex justify-center items-center '
            onClick={()=>{scrollToSection("intro")}}
        >
            <UilArrowUp className='w-10 h-10'/>
        </button>
    );
}
 
export default ReturnToTop;