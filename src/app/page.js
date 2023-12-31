import Image from 'next/image'
import Navbar from '../../components/navbar'
import Start from '../../components/start'
import Products from '../../components/products'
import Advantages from '../../components/advantages'
import Markets from '../../components/markets'
import AboutUs from '../../components/aboutUs'
import ContactUs from '../../components/contactUs'
import Footer from '../../components/footer'
import WebsiteCounter from '../../components/websiteCounter'


export default function Home() {
  return (
    <>
    <Navbar/>
    <Start/>

    <Products/>
    
    <Advantages/>
    <Markets/>
    <AboutUs/>
    <ContactUs/>
    <WebsiteCounter/>
    <Footer/>
    </>
  )
}
