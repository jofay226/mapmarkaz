import './btn1.scss';
import { HiArrowDownTray} from "react-icons/hi2";


const btn1 = () => {
  return (
    <div className='btnContainer'>
      <button>
        <span>Скачать</span>
        <span className='pdf'>PDF</span>
        <HiArrowDownTray/>
      </button>
    </div>
  )
}

export default btn1