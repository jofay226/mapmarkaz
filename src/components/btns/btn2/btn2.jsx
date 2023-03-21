import './btn2.scss';
import {BsFillEyeFill} from "react-icons/bs";



const btn2 = () => {
  return (
    <div className='btnContainer2'>
      <button>
        <span>Посмотреть</span>
        <BsFillEyeFill/>
      </button>
    </div>
  )
}

export default btn2