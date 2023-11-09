import Image from 'next/image'
import Navbar from '../../../components/navbar'
import StartSDKRestAPI from '../../../components/StartSDKRestAPI'
import Footer from '../../../components/footer'
import Tabs from '../tabs'
import Requests from '../../../components/Requests'


export default function SDK() {
  return (
    <>
    <Navbar/>
    <StartSDKRestAPI 
    title={"Server SDK for fingerprint recognition"}
    para={"Neurodactyl SDK helps system integrators and software providers to implement biometric fingerprint recognition - verification or identification - into their products, systems and services. The SDK is based on deep learning technologies and matches any types of fingerprints between each other: flats, rolls, latents and photo images, creating fixed-size and compatible template for any type of fingerprints. Recognition algorithm of Neurodactyl server SDK has archived world's top tier accuracy in NIST PFT III benchmarks."}
    link={"https://fingerapi.neurodactyl.com/common/#/verification-mode"}
    />
    <Tabs/>
    <Requests 
    title={"SDK evaluation request"} 
    send={"TEST LICENSE REQUEST"}
    />
    <Footer/>
    </>
  )
}
