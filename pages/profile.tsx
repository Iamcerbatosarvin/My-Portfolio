import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import Image from "next/image";
import pic from "../img/arvin2.png";
import aj from "../img/AJ.png";
import mo from "../img/MICROSOFT OFFICE.png";
import cn from "../img/Computer Networks.png";
import md from "../img/Machine Design.png";
import wd from "../img/WEBDEV.png";
import wt from "../img/WEBT.png";
import ap from "../img/ARDUINO.png";
import lspu from "../img/1.png";
import cinhs from "../img/2.png";
import omad from "../img/OMAD.jpg";
import acoes from "../img/acoes.jpeg";
import fess from "../img/fess.jpeg";

const inter = Inter({ subsets: ["latin"] });

export default function profile() {
  return (
    <main
      className={`flex min-h-screen bg-[url(../img/wallpaperflare.com_wallpaper.jpg)] bg-no-repeat bg-cover bg-fixed ${inter.className}`}
    >
      <div>
        <Navbar></Navbar>
        <div className="flex justify-center">
          <div className="card w-[330px] m-5 h-[3450px] lg:w-[1000px] lg:h-[2600px] lg:mt-[50px] lg:ml-[100px] lg:mb-[50px] bg-white bg-opacity-5">
            <div className="card-body">
              {/* ABOUT ME */}
              <h1 className="card text-xl lg:text-4xl text-blue-600 font-bold">
                ABOUT ME
              </h1>
              <div className="flex border"></div>
              <div className="lg:ml-10">
                <div className="card bg-blue-600 bg-opacity-20 w-20 h-32 right-10 mt-10 lg:w-[200px] lg:h-[330px] absolute lg:right-[150px] lg:mt-[70px] "></div>
                <Image
                  src={pic}
                  alt="Pic"
                  className="card absolute right-2 lg:right-[100px] w-32 lg:w-[300px]"
                ></Image>

                <h1 className="card indent-8 text-sm text-center lg:text-justify w-36 mt-2  lg:text-base lg:mt-[20px] lg:w-[500px]">
                  I am Arvin Jay L. Cerbatos, 22 year's old, graduated BS
                  Computer Engineering at Laguna State Polytechnic University -
                  Sta.Cruz Main Campus.
                </h1>
                <h1 className="card indent-8 text-justify w-64 ml-1 lg:ml-0 text-sm  lg:text-base mt-5 lg:w-[500px]">
                  Throughout my studies, I have learned various programming
                  languages such as C and Java as well as programming concepts
                  like algorithms and data structures. I also learned web
                  development using HTML, CSS, Javascript and Next.js as a
                  framework. I have also acquired knowledge about computer
                  architecture, operating systems, networking, database systems,
                  software engineering, and artificial intelligence. These areas
                  have provided me with a strong foundation in computer science
                  and engineering, which I believe will help me adapt to new
                  technologies and advancements in the field. Moreover, I have
                  developed critical thinking, problem-solving, and analytical
                  skills, which I am sure would be valuable in my future
                  endeavors.
                </h1>

                {/*  GOAL */}
                <div className="absolute mt-10 right-10 lg:right-[160px]">
                  <h1 className="text-xl lg:text-4xl font-bold text-blue-600">
                    MY GOAL
                  </h1>
                </div>
                <div className="flex border mt-[85px]"></div>
                <div>
                  {" "}
                  <Image
                    src={aj}
                    alt=""
                    className="card absolute ml-[70px] w-32 lg:ml-10 lg:w-[250px]"
                  ></Image>
                  <h1 className="card indent-8 absolute right-10 ml-10 mt-32 lg:right-20 text-justify text-sm lg:text-base lg:ml-0 lg:mt-10 lg:w-[500px] italic">
                    To design and develop innovative software or hardware
                    solutions that will improve people's lives and have a
                    positive impact on society and to continually learn and stay
                    up-to-date with emerging trends and advancements in the
                    field, as well as collaborating with other experts to solve
                    complex problems and bring new ideas to to contribute to the
                    advancement of technology.{" "}
                  </h1>
                </div>

                {/*  WHAT I DO */}
                <h1 className="text-xl lg:text-4xl font-bold text-blue-600 mt-[400px] lg:mt-[250px]">
                  What I Do
                </h1>
                <div className="flex border mt-1"></div>

                {/*  SKILLS */}
                <div className="flex">
                  <div className="card lg:items-center w-[150px] mt-5 text-lg lg:text-2xl font-bold italic">
                    Skills
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mt-5 lg:ml-0 ml-5">
                    <div className="column-1">
                      <div className="card items-center bg-gray-500 h-20 w-24 lg:h-[200px] lg:w-[250px] hover:bg-blue-600">
                        <Image
                          src={mo}
                          alt=""
                          className="lg:card-body lg:w-full"
                        ></Image>
                      </div>
                      <div className="card items-center bg-gray-500 h-20 w-24 lg:h-[200px] lg:w-[250px] mt-10 hover:bg-blue-600">
                        <Image
                          src={cn}
                          alt=""
                          className="lg:card-body w-20 h-20 lg:h-52 lg:w-64"
                        ></Image>
                      </div>
                    </div>
                    <div className="column-2">
                      <div className="card items-center bg-gray-500 h-20 w-24 lg:h-[200px] lg:w-[250px] hover:bg-blue-600 items-center">
                        <Image
                          src={md}
                          alt=""
                          className="lg:card-body h-20 w-20 lg:h-64 lg:w-52"
                        ></Image>
                      </div>
                      <div className="card items-center bg-gray-500 h-20 w-24 lg:h-[200px] lg:w-[250px] mt-10 hover:bg-blue-600">
                        <Image
                          src={ap}
                          alt=""
                          className="lg:card-body h-20 w-20 lg:h-56 lg:w-56"
                        ></Image>
                      </div>
                    </div>
                    <div className="column-3">
                      <div className="card items-center bg-gray-500 h-20 w-24 lg:h-[200px] lg:w-[250px] hover:bg-blue-600">
                        <Image
                          src={wd}
                          alt=""
                          className="lg:card-body h-20 w-20 lg:h-56 lg:w-64"
                        ></Image>
                      </div>
                      <div className="card items-center bg-gray-500 h-20 w-24 mt-[-80px] ml-[144px] lg:h-[200px] lg:w-[250px] lg:mt-10 lg:ml-0 hover:bg-blue-600">
                        <Image
                          src={wt}
                          alt=""
                          className="h-20 w-20 lg:h-48 lg:w-48"
                        ></Image>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  Educational BG */}
                <div className="flex">
                  <div className="card lg:items-center w-[370px] mt-10 text-lg lg:text-2xl font-bold italic">
                    Educational Background
                  </div>
                </div>
                <div className="flex lg:justify-center flex-col ml-2 lg:ml-0 lg:flex-row gap-10 mt-5">
                  <div className="card items-center w-[250px] h-[300px] bg-blue-600 shadow-lg shadow-blue-600">
                    <div className="flex flex-col items-center absolute bg-white bottom-0 w-full h-[200px] rounded-b-2xl">
                      <div className="mt-[-50px] border-8 border-blue-600 rounded-full h-[100px] w-[100px] bg-white">
                        <Image src={lspu} alt=""></Image>
                      </div>
                      <div className="text-xs text-black font-bold mt-5 text-center">
                        <h1 className="text-sm italic">
                          BS COMPUTER ENGINEERING
                        </h1>
                        <h1 className="mt-1">
                          Lagunaa State Polytechnic University
                        </h1>
                        <h1>Sta.Cruz Main Campus</h1>
                        <h1>2019-2023</h1>
                        <ol className="list-disc mt-[10px] ml-5 text-left font-medium italic">
                          <li>GWA: 1.59</li>
                          <li>DOST Scholar | Batch 2019</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="card items-center w-[250px] h-[300px] bg-blue-600 shadow-lg shadow-blue-600">
                    <div className="flex flex-col items-center absolute bg-white bottom-0 w-full h-[200px] rounded-b-2xl">
                      <div className="mt-[-50px] border-8 border-blue-600 rounded-full h-[100px] w-[100px] bg-white">
                        <Image src={cinhs} alt=""></Image>
                      </div>
                      <div className="text-xs text-black font-bold mt-5 text-center">
                        <h1 className="text-sm italic">SHS - STEM</h1>
                        <h1 className="mt-1">
                          Cavinti Integrated National High School
                        </h1>
                        <h1>Cavinti, Laguna</h1>
                        <h1>2017-2019</h1>
                        <ol className="list-disc mt-[10px] ml-5 text-left font-medium italic">
                          <li>With Honors</li>
                          <li>DOST Scholar Award</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  EXPERIENCE */}
                <div className="flex">
                  <div className="card lg:items-center w-[230px] mt-10 text-lg lg:text-2xl font-bold italic">
                    Experience
                  </div>
                </div>
                <div className="flex justify-center lg:ml-10">
                  <div className="grid grid-col lg:grid-cols-2 mt-5">
                    <div className="column-1">
                      <div className="card items-center h-20 w-52 lg:h-[200px] lg:w-[300px]">
                        <Image src={omad} alt="" className="w-full"></Image>
                      </div>
                      <div className="card items-center mt-64 lg:mt-10 h-20 w-52 lg:h-[200px] lg:w-[300px]">
                        <Image src={acoes} alt="" className="w-full"></Image>
                      </div>
                      <div className="flex items-center mt-[270px] w-52 lg:h-[200px] lg:w-[300px] lg:mt-10">
                        <Image
                          src={fess}
                          alt=""
                          className="w-full h-full"
                        ></Image>
                      </div>
                    </div>
                    <div className="column-2 lg:mt-10">
                      <div className="card absolute bottom-[750px] ml-1 h-20 w-52  lg:bottom-[500px] lg:h-[200px] lg:w-[400px] lg:ml-0 lg:mt-0">
                        <h1 className="font-bold text-sm lg:text-2xl italic text-blue-600">
                          On-The-Job-Trainee
                        </h1>
                        <h1 className="font-bold text-xs lg:text-base">
                          Municipality of Cavinti <br />
                          Feb-May 2023
                        </h1>
                        <ol className="list-disc text-xs lg:text-sm ml-1 mt-5">
                          <li>Collect and Record Documents in the Office</li>
                          <li>Troubleshooting Technical Issues</li>
                        </ol>
                      </div>
                      <div className="card absolute bottom-[410px] ml-1 h-20 w-52 lg:bottom-72 lg:h-[200px] lg:w-[400px] lg:ml-0">
                        <h1 className="font-bold text-sm lg:text-2xl italic text-blue-600">
                          Business Manager
                        </h1>
                        <h1 className="font-bold text-xs lg:text-base">
                          Assocciation of Computer Engineering Students
                          <br />
                          2021-2023
                        </h1>
                        <ol className="list-disc text-xs lg:text-sm ml-1 mt-5">
                          <li>
                            Assisting all the Computer Engineering students at
                            LSPU-SCC.
                          </li>
                          <li>
                            Controls and directs the personnel and activities of
                            the organization.
                          </li>
                        </ol>
                      </div>
                      <div className="card mt-5 h-20 w-52 lg:mt-[450px] lg:h-[200px] lg:w-[400px]">
                        {" "}
                        <h1 className="font-bold text-sm lg:text-2xl italic text-blue-600">
                          Awards Committee
                        </h1>
                        <h1 className="font-bold text-xs lg:text-base">
                          Federation of Engineering Students Society <br />
                          2022-2023
                        </h1>
                        <ol className="list-disc text-xs lg:text-sm ml-1 mt-5">
                          <li>Creating Layouts for the awards on the event</li>
                          <li>Creating Certificates and Sticker Designs</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
