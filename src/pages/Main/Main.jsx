import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import { Outlet } from 'react-router-dom';
import './Main.scss';
const Main = () => {
  return (
    <>
        <Header/>
        <main  className='mainContainer'>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Main