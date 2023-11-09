'use client'
import { useState } from "react";
import Tab_Component from "./tabs_component";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                style={{ color: openTab === 1 ? 'blue' : 'black', fontWeight: openTab === 1 ? 600 : 300 }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Features
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                style={{ color: openTab === 2 ? 'blue' : 'black', fontWeight: openTab === 2 ? 600 : 300 }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Architecture
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                style={{ color: openTab === 3 ? 'blue' : 'black', fontWeight: openTab === 3 ? 600 : 300 }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Technology Stack
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                style={{ color: openTab === 4 ? 'blue' : 'black', fontWeight: openTab === 4 ? 600 : 300 }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Systems Requirment
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                style={{ color: openTab === 5 ? 'blue' : 'black', fontWeight: openTab === 5 ? 600 : 300 }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Licensing and Pricing
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Tab_Component
                    number1={"1"}
                    title1={"Fingerprints detection"}
                    des1={"The platform detects fingerprints on photo images and scans (250 dpi and higher). The detector returns 2 landmarks and bounding boxes for each detected fingerprint. Number of fingerprints/fingers on an image is not limited. Left/right hand detection based on fingerprint analysis (optional)."}
                    number2={"2"}
                    title2={"Biometric template extraction"}
                    des2={"The platform converts an image into compact descriptor, describing unique features of a fingerprint. All templates extracted from photo images and scans are compatible and have standard size - 512 bytes."}
                    number3={"3"}
                    title3={"Matching"}
                    des3={"The platform compares templates against each other in different modes: 1:1, 1:N, M:N (batch mode) and returns similarity score (native values equal to -logFAR and %)."}
                    number4={"4"}
                    title4={"User authorization"}
                    des4={"Users are authorized with JWT (json web token) and can have fully separated sandboxes for their enrolled data"}
                  />
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Tab_Component
                    number1={"1"}
                    title1={"Microservices architecture"}
                    des1={"All features of Neurodactyl server platform operate as microservices, which helps to build resilient and scalable fingerprint recognition system. All microservices are containerized and can be deployed with container orchestration system like Kubernetes, etc."}
                    number2={"2"}
                    title2={"Easy scale up"}
                    des2={"Detection and extraction features are separated as microservices, which you can flexibly increase, when total load of the system - number of incoming requests - is increasing. The load will be automatically distributed and balanced between all services of detection and template extraction."}
                    number3={"3"}
                    title3={"Automatic batch collection"}
                    des3={"Neurodactyl fingerprint recognition SDK allows to use batches to increase throughput on GPU. Neurodactyl server platform automatically collects batches of optimum size in order to provide faster processing of incoming images and best utilization of available hardware."}
                    number4={"4"}
                    title4={"Sandboxes"}
                    des4={"The platform allows to create fully isolated sandboxes. Sandboxes can be assigned to users, so they can have fully isolated enrollment databases for identification without interaction or having access to other user's data."}
                  />
                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                  <Tab_Component
                    number1={"1"}
                    title1={"Interfaces"}
                    des1={"RESTful web-API"}
                    number2={"2"}
                    title2={"Database"}
                    des2={"MongoDB"}
                    number3={"3"}
                    title3={"Service discovering"}
                    des3={"Zookeeper"}
                  />
                </div>

                <div className={openTab === 4 ? "block" : "hidden"} id="link2">
                  <Tab_Component
                    number2={"2"}
                    title2={"Minimum HW requirements"}
                    des2={"CPU Intel or AMD with AVX2 instructions, 8 GB RAM, 4 GB free space on a drive."}
                    number3={"3"}
                    title3={"Supported GPU"}
                    des3={"NVidia GPUs starting from Pascal architecture or later, at least 6 GB RAM."}
                    number4={"4"}
                    title4={"Image requirements"}
                    des4={"For scans - 250 dpi and higher, rolls, flats and latents are supported.For photo images - quality of images (resolution and sharpness) must provide visible fingerprints patterns."}
                    number1={"1"}
                    title1={"OS"}
                    des1={"Linux (amd64)"}
                  />
                </div>

                <div className={openTab === 5 ? "block" : "hidden"} id="link2">
                  <Tab_Component
                    number1={"1"}
                    title1={"Nuerodactyl SDK is licensed per"}
                    des1={"Number of enrolled images (size of N in the matching gallery). Number of GPUs"}
                    number2={"2"}
                    title2={"Price calculation"}
                    des2={"Size of the enrollment database. number of incoming images for detection and template extraction per 1 s"}
                  />
                </div>


                {/* <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div> */}


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Tabs;