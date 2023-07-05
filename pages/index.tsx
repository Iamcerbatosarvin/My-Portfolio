import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import profile from "../img/arvin.png";
import logo from "../img/8545482_soundcloud_music_multimedia_network_socialmedia_icon.png";
import built from "../img/9054286_bx_code_alt_icon.png";
import cpe from "../img/7263818_graduation_university_ceremony_education_graduate_icon.png";
import sh from "../img/4243254_award_basic_app_ux_icon.png";
import wd from "../img/8665571_laptop_code_icon.png";
import fl from "../img/8665242_code_fork_icon.png";
import md from "../img/9044778_model_alt_icon.png";
import dl from "../img/352275_cloud_download_icon.png";
import cr from "../img/8664815_copyright_law_icon.png";
import chip from "../img/MCUBMCSM.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-[url(../img/wallpaperflare.com_wallpaper.jpg)] bg-no-repeat bg-cover bg-fixed ${inter.className}`}
    >
      <div>
        <Navbar></Navbar>
        <div className="flex absolute w-64 h-64 mt-28 ml-[-20px] lg:w-[600px] lg:h-[600px] bg-gray-500 opacity-5 rounded-full lg:right-0 lg:mt-[110px] lg:mr-[70px]"></div>
        <Image
          src={profile}
          alt="Profile"
          className="w-[200px] mt-10 lg:absolute lg:w-[400px] lg:right-0 lg:bottom-0 lg:mr-[150px]"
        ></Image>

        {/* First Line */}
        <div className="card absolute right-2 top-44 w-48 lg:w-[700px] text-white lg:mt-20 lg:absolute lg:left-28">
          <h1 className="text-xs lg:text-xl font-bold">Hello there,</h1>
          <div className="flex text-base lg:text-4xl font-bold text-white">
            I'm{" "}
            <span className="text-blue-600 ml-[10px]">Arvin Jay Cerbatos</span>
          </div>
          <h1 className="text-xs lg:text-xl font-bold">
            a Front-End Developer.
          </h1>
          <div className="mt-1 lg:mt-[20px]">
            <button className="bg-blue-600 w-24 h-5 text-xs lg:w-[150px] lg:h-[40px] hover:bg-gray-500 lg:text-lg font-bold rounded-full">
              <a href="/contacts">CONTACT ME</a>
            </button>
          </div>
        </div>

        {/* Second Line */}
        <div className="card bg-white mt-0 lg:mt-[555px] rounded-none">
          <div className="flex justify-center w-[375px] h-[800px] lg:h-[500px] lg:w-[1210px]">
            <div className="bg-white rounded-lg h-[750px] w-[300px] lg:h-[400px] lg:w-[1000px] mt-[-30px] shadow-lg shadow-black">
              <div className="card-body w-[320px] text-black lg:h-full lg:w-[550px]">
                <div className="card absolute bottom-28 w-60 h-52 lg:bottom-40 lg:w-[350px] lg:h-[260px] bg-blue-600 shadow-lg shadow-black lg:right-[185px] lg:mt-[80px]"></div>
                <div className="absolute bottom-36 lg:bottom-40 lg:right-[230px]">
                  <Image src={chip} alt="" className="w-[250px] h-[330px]" />
                </div>
                <div className="font-bold lg:text-xl text-lg absolute">
                  Overview
                </div>
                <h1 className="absolute lg:right-[430px] font-bold lg:text-base lg:top-0 absolute top-80">
                  Latest Project
                </h1>
                <h1 className="text-center mr-[65px] absolute bottom-32 text-sm lg:right-[140px] lg:bottom-[170px] font-bold lg:text-sm text-white">
                  MCU-Based Multi-Crop Chips Slicer Machine
                </h1>
                <div className="flex">
                  <Image
                    src={built}
                    alt=""
                    className="w-5 h-5 lg:w-[30px] lg:h-[30px] mt-[35px] mr-[10px]"
                  />
                  <h1 className="mt-[38px] lg:mt-10 text-xs lg:text-base">
                    I built 3 Front-End Web Projects.
                  </h1>
                </div>
                <div className="flex">
                  <Image
                    src={cpe}
                    alt=""
                    className="w-5 h-5 lg:w-[30px] mr-[10px]"
                  />
                  <h1 className="lg:mt-1 text-xs lg:text-base">
                    I graduated BS Computer Engineering at LSPU-SCC.
                  </h1>
                </div>
                <div className="flex">
                  <Image
                    src={sh}
                    alt=""
                    className="w-5 h-5 lg:w-[30px] lg:h-[30px] mr-[10px]"
                  />
                  <h1 className="lg:mt-1 text-xs lg:text-base">
                    I finished senior high school with honors at Cavinti INHS.
                  </h1>
                </div>
                <div className="flex">
                  <Image
                    src={wd}
                    alt=""
                    className="w-5 h-5 lg:w-[30px] mr-[10px]"
                  />
                  <h1 className="lg:mt-1 text-xs lg:text-base">
                    I am an aspiring Web Developer.
                  </h1>
                </div>
                <div className="flex">
                  <Image
                    src={fl}
                    alt=""
                    className="w-5 h-5 mt-1 lg:mt-[10px] lg:w-[30px] lg:h-[30px] mr-[10px]"
                  />{" "}
                  <h1 className="lg:mt-1 text-xs lg:text-base">
                    I'm still improving my skills in programming through
                    freelancing.
                  </h1>
                </div>
                <div className="flex">
                  <Image
                    src={md}
                    alt=""
                    className="w-5 h-5 lg:w-[30px] mr-[10px]"
                  />{" "}
                  <h1 className="lg:mt-1 text-xs lg:text-base">
                    I used to create a machine design using Sketch-Up.
                  </h1>
                </div>

                {/* Default Button*/}
                <div className="flex justify-center">
                  <button className="bg-gray-400 mt-[10px] w-32 h-[30px] lg:mr-80 lg:w-[150px] lg:h-[40px] hover:bg-blue-600 font-bold rounded-full">
                    <a href="https://drive.google.com/file/d/1FTjDdfkxaq67Oo6x70_wFLe4hjjsBTFE/view?usp=sharing">
                      <Image
                        src={dl}
                        alt=""
                        className="w-5 h-5 lg:w-[30px] lg:h-[30px] ml-[15px]"
                      />
                      <h1 className="mt-[-20px] ml-5 lg:mt-[-26px] lg:ml-[35px] text-sm lg:text-base">
                        RESUME
                      </h1>
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/*Default Footer*/}
            <footer className="flex absolute bottom-0 text-black">
              <Image
                src={cr}
                alt=""
                className="w-[20px] h-[20px] mr-[10px] mb-2"
              />
              <h1 className="mb-[10px]">Copyright All Rights Reserved</h1>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
