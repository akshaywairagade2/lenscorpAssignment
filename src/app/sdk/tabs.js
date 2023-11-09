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
                Performance
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
                Interfaces and Platforms
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
                    des1={"The SDK detects fingerprints on photo images and scans (250 dpi and higher). The detector returns 2 landmarks and bounding boxes for each detected fingerprint. Number of fingerprints/fingers on an image is not limited. Left/right hand detection based on fingerprint analysis (optional)."}
                    number2={"2"}
                    title2={"Biometric template extraction"}
                    des2={"The SDK converts an image into compact descriptor, describing unique features of a fingerprint. All templates extracted from photo images and scans are compatible and have standard size - 512 bytes."}
                    number3={"3"}
                    title3={"Matching"}
                    des3={"The SDK compares templates against each other in different modes: 1:1, 1:N, M:N (batch mode) and returns similarity score (native values equal to -logFAR and %)."}
                    number4={"4"}
                    title4={"Images decompression"}
                    des4={"The SDK has decompression feature including WSQ format."}
                  />
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Tab_Component
                    number1={"1"}
                    title1={"Biometric template"}
                    des1={"Size of biometric template is constant: 512 bytes in memory (serialized template is 546 bytes). All enrolled templates are stored in RAM, so required size of RAM depends on the size of your enrollment database."}
                    number2={"2"}
                    title2={"Detection speed"}
                    des2={"Detection can be performed on CPU or GPU. Average detection speed: 10-20 ms per 1 image on GPU and 70-100 ms - on CPU. Average detection speed in batch on GPU: 2-4 ms per 1 image."}
                    number3={"3"}
                    title3={"Template extraction speed"}
                    des3={"Template extraction can be performed on CPU or GPU. Average extraction speed: 50 ms per 1 image on GPU and 250-500 ms - on CPU. Average extraction speed in batch on GPU: 5-10 ms per 1 image."}
                    number4={"4"}
                    title4={"Matching speed"}
                    des4={"100 million matching operation per 1 s on one modern CPU. In batch mode: up to 1,5 billion matches per 1 s. Benchmarks for CPU models:"}
                  />
                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                  <Tab_Component
                    number1={"1"}
                    title1={"Interfaces"}
                    des1={"C++, C# with code examples. Neurodactyl REST API platform is available for Neurodactyl SDK."}
                    number2={"2"}
                    title2={"Platforms"}
                    des2={"Windows 7 or later (amd64), Linux (amd64)"}
                  />
                </div>

                <div className={openTab === 4 ? "block" : "hidden"} id="link2">
                  <Tab_Component
                    number1={"1"}
                    title1={"Minimum HW requirements"}
                    des1={"CPU Intel or AMD with AVX2 instructions, 8 GB RAM, 4 GB free space on a drive."}
                    number2={"2"}
                    title2={"Supported GPU"}
                    des2={"NVidia GPUs starting from Pascal architecture or later, at least 6 GB RAM."}
                    number3={"3"}
                    title3={"Image requirements"}
                    des3={"For scans - 250 dpi and higher, rolls, flats and latents are supported.For photo images - quality of images (resolution and sharpness) must provide visible fingerprints patterns."}
                    number4={"4"}
                    title4={"Supported image formats"}
                    des4={"png, jpeg, bmp, wsq and others."}
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