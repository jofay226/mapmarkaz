import '../../assets/style/header.scss'
import { Link } from "react-router-dom";
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


  return (
    <div className='headerContainer'>
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

        </div>  
      </div>
    </div>
  )
}

export default Header