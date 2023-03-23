import '../../assets/style/header.scss'
import { Link, useLocation } from "react-router-dom";
import Logo from '../../assets/images/logo.png';
import headerBook from '../../assets/images/headerBook.png';
import headerFlag from '../../assets/images/headerFlag.png';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import {IoMdSearch} from 'react-icons/io';
import {   BsWind, BsThermometer  } from 'react-icons/bs';
import { TbTemperatureCelsius} from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../reduxToolkit/weatherSlice/weatherSlice';
import { useEffect, useState } from 'react';
import { toggleMenu } from '../../reduxToolkit/serviceSlice/serviceSlice';
import {BsTelephone} from  "react-icons/bs";
import {HiOutlineMail} from  "react-icons/hi";
import {HiOutlineLocationMarker} from "react-icons/hi"; 
import {BsInstagram, BsFacebook, BsTelegram, BsTiktok}   from "react-icons/bs";
import {AiOutlineCloseCircle} from "react-icons/ai"; 


const Header = () => {
  const { t, i18n } =  useTranslation()
  const dispatch = useDispatch()
  const data = useSelector( state => state.weather.data)
  const menu = useSelector( state => state.service.menuOpen)


  const [inputValue, setInputValue] = useState('');
  const [location, setLocation] = useState('Tashkent');


  const handlerLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);  
  }  

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue !== ''){
      setLocation(inputValue)
    }
    setInputValue('')
  }
  
  useEffect(() => {
    if(location !== '') {
      dispatch(getWeather(location))
    }
  },[location, dispatch])


  const date = new Date()

  const menuOpenHandler = () => {
    dispatch(toggleMenu())
  }

  const page = useLocation()
  const currentPage = page.pathname;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');
  const [disable, setDisable] = useState(true);
  const [modal, setModal] = useState(false);



  useEffect(() => {
    if(name.length > 1 && phone.length > 11 && text.length > 1){
      setDisable(false)
    }
  },[name, phone, text])

  const inputHandler = (e) => {
    const name = e.target.type;
    const value = e.target.value 
    if(name=== 'text'){
      setName(value)
    } else if( name === 'tel'){
      setPhone(value)
    } else if(name === 'textarea' ){
      setText(value)
    }
  }



  const submitHandler = (e) => {
    e.preventDefault()
    setModal(true)
    // setName('')
    // setPhone('')
    // setText('')
    setDisable(true)
  }

  const callHandler = (e) => {
    e.preventDefault();
    console.log(window.open('tel:998881317744'))
  }
  const modalHandler = () => {
    setModal(false)
    setName('')
    setPhone('')
    setText('')
  }
  


  return (
    <div className='headerContainer'>
      {modal && (
        <div className='headerContainer-overlay'>

        </div>
      )}
      <div className='headerContainer-inner'>
        <div className='headerContainer-inner-left'>
            {menu && (
              <div className='burgersMenu'>
                <NavLink to='/'>{t("header.navlink1")}</NavLink>
                <NavLink to='/about'>{t("header.navlink2")}</NavLink>
                <NavLink to='/contact'>{t("header.navlink3")}</NavLink>
              </div>
            )}
          <div className='headerContainer-inner-left-wrapper1'>
            <Link to="/"> <img src={Logo} alt="logo" /> <span>mapmarkaz.uz</span></Link>

            <select className='headerContainer-inner-left-wrapper1-select'  onChange={handlerLanguageChange} value={localStorage.getItem("i18nextLng")}>
              <option value="ru">🇷🇺 Ru</option>
              <option value="uz">🇺🇿 Uz</option>
            </select>

            <div onClick={menuOpenHandler} className={menu ? 'headerContainer-inner-left-wrapper1-burgerContainer menuOpen': 'headerContainer-inner-left-wrapper1-burgerContainer'}>
              <div className="headerContainer-inner-left-wrapper1-burgerContainer-burger"></div>
            </div>
          </div>

          {currentPage === '/about' && (
            <h1 className='headerContainer-inner-left-aboutPageh1'>О нас</h1>
          )}

          {currentPage === '/' ? (
              <>
                <div className='headerContainer-inner-left-wrapper2'>
                  <h1>{t("header.htext")}</h1>
                  <p>{t("header.ptext")}</p>
                </div>

                <div className='headerContainer-inner-left-wrapper3'>
                  <div className='headerContainer-inner-left-wrapper3-inner'>
                    <p>{t("header.ptext2")}</p>
                    <button>{t("header.btntext")}</button>
                  </div>
                  <img src={headerBook} alt="headerbook" />
                </div>


                <div className='headerContainer-inner-left-wrapper4'>
                  <div className='headerContainer-inner-left-wrapper4-inner'>
                    <div className='headerContainer-inner-left-wrapper4-inner-left'>
                      <p>{t("header.htext2")} :</p>
                      <a href="/mudofa.uz">mudofa.uz</a>
                      <a href="/uzspace.uz">uzspace.uz</a>
                      <a href="/kadastr.uz">kadastr.uz</a>
                      <a href="/gisinfo.ru<">gisinfo.ru</a>
                    </div>

                    <div className='headerContainer-inner-left-wrapper4-inner-right'>
                      <p>{t("header.htext3")} : 25  {t("header.htext4")} : 2500</p>
                      <div className='headerContainer-inner-left-wrapper4-inner-right-flags'>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                        <div><img src={headerFlag} alt="flag" /> <span>5</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
          ) : currentPage === '/contact' && (
            <div className='headerContainer-inner-left-contactWrapper'>
              {modal && (
                <div className='headerContainer-inner-left-contactWrapper-modal'>
                  <AiOutlineCloseCircle onClick={modalHandler} size={30}/>
                  <p>Hurmatli {name}, Biz Murojatingizni qabul qildik. 1-3 kun oraligida ushbu raqamga {phone} operatorlarimiz aloqaga chiqadilar</p>
                </div>
              )}
              <h1>Связаться с нами</h1>
              <p>Используйте форму ниже, чтобы отправить нам свои комментарии или сообщить о любых проблемах, с которыми вы столкнулись при поиске информации на нашем веб-сайте. Мы внимательно читаем все отзывы, но учтите, что мы не можем отвечать на отправленные вами комментарии.</p>
              <form  className='headerContainer-inner-left-contactWrapper-form' action="">
                <div className='headerContainer-inner-left-contactWrapper-form-input'>
                  <div className='headerContainer-inner-left-contactWrapper-form-input-name'>
                    <label htmlFor="fullname">Полное имя</label>
                    <input onChange={inputHandler} type="text" placeholder='Javokhir Fayzullaev.....' value={name} />
                  </div>
                  <div className='headerContainer-inner-left-contactWrapper-form-input-number'>
                    <label htmlFor="phoneNumber">Номер телефона</label>
                    <input onChange={inputHandler} type="tel" placeholder='+998 (_ _) _ _ _-_ _-_ _'  pattern='[0-9]{3}-?[0-9]{2}-?[0-9]{7}' maxLength={12} value={phone}/>
                  </div>
                </div>
                <label htmlFor="text">Сообщение</label>
                <textarea onChange={inputHandler} name="text" id="" cols="30" rows="10" value={text}></textarea>
                <div className='headerContainer-inner-left-contactWrapper-form-btns'>
                  <button disabled={disable}    onClick={submitHandler} className={disable ? 'headerContainer-inner-left-contactWrapper-form-btns-1 disable' : 'headerContainer-inner-left-contactWrapper-form-btns-1' } >Отправить</button>
                  <button onClick={callHandler} className='headerContainer-inner-left-contactWrapper-form-btns-2'>Позвонить нам</button>
                </div>
              </form>
            </div>
          )}



        </div>




        <div className='headerContainer-inner-right'>

          <div className='headerContainer-inner-right-wrapper1'>
            <NavLink to='/'>{t("header.navlink1")}</NavLink>
            <NavLink to='/about'>{t("header.navlink2")}</NavLink>
            <NavLink to='/contact'>{t("header.navlink3")}</NavLink>
          </div>

          <div className='headerContainer-inner-right-wrapper2'>
            <div className='headerContainer-inner-right-wrapper2-earth'></div>
          </div>

          {
            currentPage === '/'? (
              <>
                <div className='headerContainer-inner-right-wrapper3'>
                  <div className='headerContainer-inner-right-wrapper3-inner1'>
                        <form className='headerContainer-inner-right-wrapper3-inner1-form'>
                          <div className='headerContainer-inner-right-wrapper3-inner1-form-inputWrapper'>
                            <input type="text" placeholder={t("header.input1")} onChange={handleInput} value={inputValue} required />
                            <button onClick={handleSubmit}><IoMdSearch/></button>
                          </div>
                        </form>


                      <div className='headerContainer-inner-right-wrapper3-inner1-date'>{date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()}</div>
                  </div>

                  <div className='headerContainer-inner-right-wrapper3-inner2'>
                    <div className='headerContainer-inner-right-wrapper3-inner2-left'>
                      <div>{data.main && data.main.temp.toFixed()} °C</div>
                      <div><BsWind/>{t("header.input2")} {data.main && data.wind.speed} m/s</div>
                      <div><BsThermometer/>{t("header.input3")} {data.main && data.main.feels_like.toFixed()}<TbTemperatureCelsius/></div>
                    </div>

                    <div className='headerContainer-inner-right-wrapper3-inner2-right'>
                      <div className='headerContainer-inner-right-wrapper3-inner2-right-left'>
                        <div>{data.main && data.weather[0].description}</div>
                        <div>H:{data.main && data.main.temp_max.toFixed()}° L:{data.main && data.main.temp_min.toFixed()}°</div>
                      </div>
                      <div className='headerContainer-inner-right-wrapper3-inner2-right-right'>{ data.main && data.name},{ data.main && data.sys.country}</div>
                    </div>
                  </div>


                </div>
              </>
            ): currentPage === '/contact' && (
              <div className='headerContainer-inner-right-contactWrapper'>
                <h1>Контактная информация</h1>
                <div className='headerContainer-inner-right-contactWrapper-info'>
                  <div><BsTelephone/> <p>Дежурный: +998 71 233-17-37</p></div>
                  <div><BsTelephone/> <p>Бухгалтерия: +998 71 233-43-44</p></div>
                  <div><BsTelephone/> <p>Телеграмм: +998 99 353-49-22</p></div>
                  <div><HiOutlineMail/> <p>mapmarkaz@umail.uz</p></div>
                  <div><HiOutlineLocationMarker/> <p>100060, г. Ташкент, Мирабадский район, ул. Яхъё Гуломова, 93.</p></div>
                </div>

                <div className='headerContainer-inner-right-contactWrapper-socials'>
                  <a href=""><BsInstagram size={30}/></a>
                  <a href=""><BsFacebook size={30}/></a>
                  <a href=""><BsTelegram size={30}/></a>
                  <a href=""><BsTiktok size={30}/></a>
                </div>
              </div>
            )
          }



        </div>  
      </div>
    </div>
  )
}

export default Header