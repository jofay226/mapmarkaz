import './card.scss';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md";
import Btn1 from '../btns/btn1/btn1';
import Btn2 from '../btns/btn2/btn2';
import { useState } from 'react';


const Card = ({name}) => {
  const [toggle, setToggle] = useState(false);

  const hideContent = () => {
    setToggle(prev => !prev)
  }

  return (
    <div style={{height: toggle ? '100px': '160px', overflow: 'hidden'}} className='cardCompContainer'>
      <div className='cardCompContainer-top'>
        <span>{name}</span>
        { toggle ? <MdKeyboardArrowDown size={40} onClick={hideContent}/> :<MdKeyboardArrowUp size={40} onClick={hideContent}/>}
      </div>

      <div className='cardCompContainer-bottom'>
        <Btn1/>
        <Btn2/>
      </div>
    </div>
  )
}

export default Card