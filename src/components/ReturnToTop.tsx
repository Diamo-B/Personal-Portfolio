import { UilArrowUp } from '@iconscout/react-unicons'
import useAutoScroll from '../helpers/autoScroll';

type Props = {
    idToGoTo: string
}
const ReturnToTop = ({idToGoTo}:Props) => {
    const {scrollToSection} = useAutoScroll()
    return ( 
        <button className='bg-white w-14 h-14 rounded-full flex justify-center items-center '
            onClick={()=>{return scrollToSection(idToGoTo)}}
        >
            <UilArrowUp className='w-10 h-10'/>
        </button>
    );
}
 
export default ReturnToTop;