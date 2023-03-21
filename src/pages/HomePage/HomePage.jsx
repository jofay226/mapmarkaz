import './HomePage.scss';
import war1 from '../../assets/images/homePageImgs/war1.png'
import war2 from '../../assets/images/homePageImgs/war2.png'
import war3 from '../../assets/images/homePageImgs/war3.png'

import cardImg1 from '../../assets/images/homePageImgs/cardImage1.png';
import cardImg2 from '../../assets/images/homePageImgs/cardImage2.png';
import cardImg3 from '../../assets/images/homePageImgs/cardImage3.png';
import cardImg4 from '../../assets/images/homePageImgs/cardImage4.png';
import cardImg5 from '../../assets/images/homePageImgs/cardImage5.png';

import { RxThickArrowLeft, RxThickArrowRight } from "react-icons/rx";
import {HiChevronDown} from "react-icons/hi2";
import { useState } from 'react';

import {HiMagnifyingGlass} from "react-icons/hi2";
import Btn1 from '../../components/btns/btn1/btn1';
import Btn2 from '../../components/btns/btn2/btn2';
import Card from '../../components/card/card';



const HomePage = () => {
  const [x, setX] = useState(0);
  const [state, setState] = useState({
    active: 1,
    quaters: [1, 2, 3, 4]
  })


  // const carouselWrapper = document.querySelector('.homePageContainer2-wrapper-cardWrapper')

  const couroselData = [
    { img:cardImg1, 
      text:'Картографические материалы различного назначения' 
    },
    { img:cardImg2, 
      text:'Цифровые трехмерные модели местности и объектов' 
    },
    { img:cardImg3, 
      text:'Книжно-бланочная и журнальная продукция' 
    },
    { img:cardImg4, 
      text:'Плакаты, этикетки и буклеты' 
    },
    { img:cardImg5, 
      text:'Производственные мощности' 
    },
  ]



  
  const changeQuaters = (e, index) => {
    setState(prev => {
      return {...prev, active : state.quaters[index]}
    })
  }

  const activeClass = (index) => {
    if(state.quaters[index] === state.active){
      return 'active'
    }

    return ''
  }
  
  const goLeft = () => {
    // if(carouselWrapper.scrollWidth >) {
      // if(x - 300 > 0){
      //   setX(prev => prev - 300)
      //   sliderRef.current.scrollTo(x, 0) 
      // } else {
      //   setX(0)
      //   sliderRef.current.scrollTo(0, 0) 
      // }
    x === 0 || x > 0 ? setX(0) : setX( x => x + 300)

  }
  
  const goRight = () => {
    // if(x + 300 < carouselWrapper.scrollWidth/2 ){
    //   setX(prev => prev + 300)
    //   sliderRef.current.scrollTo(x, 0) 
    // } else {
    //   setX(carouselWrapper.scrollWidth/2)
    //   sliderRef.current.scrollTo(carouselWrapper.scrollWidth/2, 0)
    // }
    x === -300* couroselData.length || x > couroselData.length ? setX(-300* couroselData.length) : setX(x => x - 300)
  }
  return (
    <div>
      <div className='homePageContainer1'>
        <div className='homePageContainer1-wrapper'>
          <h1 className='htext1'>О нас</h1>
          <div className='homePageContainer1-wrapper-mobileImg'></div>
          <img className='war1'  src={war1} alt="ww" />
          <img className='war2' src={war2} alt="ww" />
          <img className='war3' src={war3} alt="ww" />
          <p className='ptext1'>Картографический центр Министерства обороны Республики Узбекистан образован 23 декабря 1921 года как оборонное предприятие. Картографический центр выполняет полиграфические работы и специальные задачи по созданию картографических материалов различного назначения.</p>
          <p className='ptext2'>История создания картографической службы на территории Республики Узбекистан берет начало с 1866 года, когда по указанию Императорского двора России в Ташкенте был создан военно-топографический отдел, при котором 28 октября 1867 года была образована литография, где выпускались первые в Центральной Азии топографические карты.В период с 1918 по 1923 годы персоналом картографической части, были выполнены работы по составлению двух-, десяти- и сорокаверстных карт Туркестана. Однако в 1919 году в связи с тяжестью Гражданской войны работы были приостановлены, а все картографы перешили к выполнению чертежных работ по заданию штаба Туркестанского фронта. </p>
          <p className='ptext3'>В 1920 году печатание карт, вследствие изъятия комиссариатом финансов для печатания денежных знаков литографской скоропечатной машины и одного ручного станка, производилось на одном оставшемся ручном станке. В 1921 году оборудование было возвращено, но уже в конце года полиграфический отдел Совета народного хозяйства изъял для своих нужд литографскую машину, которую возвратили только в 1923 году.</p>
          <button className='btnBottom'>Подробнее</button>
        </div>
      </div>

      <div className='homePageContainer2'>
        <div className='homePageContainer2-wrapper'>
          <h1>Услуги</h1>
          <div className='arrowsWrapper'>
            <button onClick={goLeft}><RxThickArrowLeft size={'2em'}/></button>
            <button onClick={goRight}><RxThickArrowRight size={'2em'}/></button>
          </div>
          <div   className='homePageContainer2-wrapper-cardWrapper'>
            {couroselData.map((item,index) => (
              <div style={{transform: `translate(${x}px)`}} key={index} className='homePageContainer2-wrapper-cardWrapper-card'>
                <img src={item.img} alt="cardImg1" className='homePageContainer2-wrapper-cardWrapper-card-img'/>
                <div className='homePageContainer2-wrapper-cardWrapper-card-text'>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='homePageContainer3'>
        <div className='homePageContainer3-wrapper'>
           <h1>Финансово-экономическая отчетность нашего предприятия</h1>   
           <div className='homePageContainer3-wrapper-quaterCard'>
              <div className='homePageContainer3-wrapper-quaterCard-1row'>
                <p>Год</p>
                <p>Квартал</p>
              </div>
              <div className='homePageContainer3-wrapper-quaterCard-2row'>
                <div className='homePageContainer3-wrapper-quaterCard-2row-top'>

                  <select name="" id="">
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                  </select>

                  {state.quaters.map( (item, index) => {
                    return (<div className={activeClass(index)}  key={index} onClick={ (e) => changeQuaters(e,index)}>{item}</div>)
                  })}
                </div>

                <button> <span>Поиск</span><HiMagnifyingGlass/></button>
              </div>

              <div className='homePageContainer3-wrapper-quaterCard-3row'></div>

              <div className='homePageContainer3-wrapper-quaterCard-4row'>
                <p>Названиефайла.pdf</p>
                <Btn1/>
                <div className='homePageContainer3-wrapper-quaterCard-4row-btn2'>
                  <Btn2/>
                </div>
              </div>
           </div>

           <h2>ОБЪЯВЛЕНИЯ</h2>
           <Card name={'Тендеры'}/>
           <Card name={'Социальная зашита'}/>
           <Card name={'Вакансии '}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage