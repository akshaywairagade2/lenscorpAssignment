import Image from 'next/image'
import Navbar from '../../../components/navbar'
import StartSDKRestAPI from '../../../components/StartSDKRestAPI'
import Footer from '../../../components/footer'
import Tabs from '../sdk/tabs'
import Requests from '../../../components/Requests'


export default function RestAPI() {
  return (
    <>
    <Navbar/>
    <StartSDKRestAPI 
    title={"Server platform for fingerprint recognition"}
    para={"Neurodactyl server platform provides easy implementation of fingerprint recognition features using simple RESTful web-API. The platform is based on microservices architecture, which allows flexible system scaling and load balancing. Neurodactyl server platform can be deployed as cloud fingerprint recognition system with a sandbox for each user. The platform utilizes Neurodactyl fingerprint recognition SDK."}
    link={"https://fingerapi.neurodactyl.com/common/#/verification-mode"}
    />
    <Tabs/>
    <Requests 
    title={"Test license request"} 
    send={"Request A License"}
    />
    <Footer/>
    </>
  )
}
