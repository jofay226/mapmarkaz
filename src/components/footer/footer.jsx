import '../../assets/style/footer.scss'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md";
import {BsTelephone} from  "react-icons/bs";
import {HiOutlineMail} from  "react-icons/hi";
import {HiOutlineLocationMarker} from "react-icons/hi"; 
import Logo from '../../assets/images/logo.png'
import { useState } from 'react';

const Footer = () => {

  const [toggle, setToggle] = useState(false)

  const hideFooter = () => {
    setToggle(prev => !prev)
  }
  return (
    <div className='footerContainer'>
      <div style={{height: toggle ? '0px' :'', padding: toggle ? '0': ''}} className='footerContainer-topWrapper'>
        <div className='footerContainer-topWrapper-cont1'>
          <div>
            <img src={Logo} alt="logo" />
            <span>mapmarkaz.uz</span>
          </div>
          <p>Картографический центр! Производство картографических материалов и полиграфической продукции</p>
        </div>

        <div className='footerContainer-topWrapper-cont2'>
          <h1>Контакты</h1>
          <div><BsTelephone/> <p>Дежурный: +998 71 233-17-37</p></div>
          <div><BsTelephone/> <p>Бухгалтерия: +998 71 233-43-44</p></div>
          <div><BsTelephone/> <p>Телеграмм: +998 99 353-49-22</p></div>
          <div><HiOutlineMail/> <p>mapmarkaz@umail.uz</p></div>
          <div><HiOutlineLocationMarker/> <p>100060, г. Ташкент, Мирабадский район, ул. Яхъё Гуломова, 93.</p></div>
        </div>

        <div className='footerContainer-topWrapper-cont3'>
          <h1>Реквизиты</h1>
          <p>Банк: Ташкентский филиал отделения Ипотека-банк АТИБ</p>
          <p>Р/С: 20203000000447954002</p>
          <p>ИНН: 201052239</p>
          <p>ОКОНХ : 19400</p>
          <p>ОКЕД : 18120</p>
          <p>Скопировать</p>
        </div>
      </div>
      <div className='footerContainer-bottomWrapper'>
        <p className='footerContainer-bottomWrapper-item1'>Copyright © 2022 mapmarkaz</p>
        <p className='footerContainer-bottomWrapper-item2'>Developer by Napa</p>
        <div className='footerContainer-bottomWrapper-item3' onClick={hideFooter}>{!toggle ? <MdKeyboardArrowUp size={50}/>: <MdKeyboardArrowDown size={50}/> }</div>
      </div>
    </div>
  )
}

export default Footer