import './AboutPage.scss';

import section11 from '../../assets/images/aboutPageImage/section1-1.png';
import section12 from '../../assets/images/aboutPageImage/section1-2.png';
import section13 from '../../assets/images/aboutPageImage/section1-3.png';
import section14 from '../../assets/images/aboutPageImage/section1-4.png';
import section15 from '../../assets/images/aboutPageImage/section1-5.png';
import section16 from '../../assets/images/aboutPageImage/section1-6.png';
import section17 from '../../assets/images/aboutPageImage/section1-7.png';


const AboutPage = () => {
  return (
    <div className='aboutPage-Container'>
      <div className='aboutPage-Container-wrapper'>
        <div className='aboutPage-Container-wrapper-section1'>
          <img className='aboutPage-Container-wrapper-section1-img11' src={section11} alt="coat" />
          <img className='aboutPage-Container-wrapper-section1-img12' src={section12} alt="medal" />
          <h1>История Mapmarkaz</h1>
          <p className='aboutPage-Container-wrapper-section1-p1'>Картографический центр Министерства обороны Республики Узбекистан образован 23 декабря 1921 года как оборонное предприятие.<br/> Картографический центр выполняет полиграфические работы и специальные задачи по созданию картографических материалов различного назначения.</p>
          <div className='aboutPage-Container-wrapper-section1-personCont person1'>
            <img src={section13} alt="person" />
            <p>Генерал-майор И.А.Бубнов</p>
          </div>
          <div className='aboutPage-Container-wrapper-section1-personCont person2'>
            <img src={section14} alt="person" />
            <p>Полковник <br/> А.А.Понырко</p>
          </div>
          <div className='aboutPage-Container-wrapper-section1-personCont person3'>
            <img src={section15} alt="person" />
            <p>Полковник <br/> В.А.Словцев</p>
          </div>
          <p className='aboutPage-Container-wrapper-section1-p2'>История создания картографической службы на территории Республики Узбекистан берет начало с 1866 года, когда по указанию Императорского двора России в Ташкенте был создан военно-топографический отдел, при котором 28 октября 1867 года была образована литография, где выпускались первые в Центральной Азии топографические карты. <br/> В период с 1918 по 1923 годы персоналом картографической части, были выполнены работы по составлению двух-, десяти- и сорокаверстных карт Туркестана. Однако в 1919 году в связи с тяжестью Гражданской войны работы были приостановлены, а все картографы перешили к выполнению чертежных работ по заданию штаба Туркестанского фронта. </p>
          <div className='aboutPage-Container-wrapper-section1-personCont person4'>
            <img src={section16} alt="person" />
            <p>Полковник Д.С.Граменицкий</p>
          </div>
          <div className='aboutPage-Container-wrapper-section1-personCont person5'>
            <img src={section17} alt="person" />
            <p>Полковник <br/> Н.Н.Аксенов</p>
          </div>
          <p className='aboutPage-Container-wrapper-section1-p3'>В 1920 году печатание карт, вследствие изъятия комиссариатом финансов для печатания денежных знаков литографской скоропечатной машины и одного ручного станка, производилось на одном оставшемся ручном станке. В 1921 году оборудование было возвращено, но уже в конце года полиграфический отдел Совета народного хозяйства изъял для своих нужд литографскую машину, которую возвратили только в 1923 году. <br/> На базе части в период с 1919 по 1925 годы действовала Ташкентская топографическая школа, которая выпустила знаменитых специалистов, внесших достойный вклад в развитие топографической службы.</p>
        </div>




      </div>
    </div>
  )
}

export default AboutPage