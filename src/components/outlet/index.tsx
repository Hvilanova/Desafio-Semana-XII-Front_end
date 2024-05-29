import Header from './header'
import Footer from './footer'
import {Outlet as Biblioteca} from 'react-router-dom'

const Outlet = () => {
  return (
    <> 
    <Header />
    <Biblioteca />
    <Footer />  
    </>
  )
}

export default Outlet