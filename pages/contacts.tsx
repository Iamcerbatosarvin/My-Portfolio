import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import fb from "../img/facebook.svg";
import ig from "../img/instagram.svg";
import li from "../img/linkedin.svg";
import gt from "../img/github.svg";
import tw from "../img/twitter.svg";
import contact from "../img/CONTACT.png";
import comp from "../img/computer.png";

const inter = Inter({ subsets: ["latin"] });

export default function contacts() {
  return (
    <main
      className={`flex min-h-screen bg-[url(../img/wallpaperflare.com_wallpaper.jpg)] bg-no-repeat bg-cover bg-fixed ${inter.className}`}
    >
      <div>
        <Navbar></Navbar>
        <div className="flex absolute right-1 top-10 w-40 lg:top-10 lg:w-96 lg:h-52">
          <Image src={contact} alt="" className="h-20 lg:h-full w-full"></Image>
        </div>
        <div className="flex w-20 h-10 lg:w-[550px] lg:h-60 lg:mt-5 lg:ml-20">
          {/* INPUTS */}
          <form>
            <label className="card">
              <span className="card-body mt-5 text-xs lg:text-sm font-bold text-blue-600 lg:mt-[-20px]">
                USERNAME
                <input
                  type="text"
                  placeholder="you@example.com"
                  className="block w-72 lg:w-96 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                />
              </span>
              <h1 className="card-body text-xs lg:text-sm font-bold text-blue-600 mt-[-50px]">
                MESSAGE
                <input
                  type="text"
                  placeholder="Enter your message"
                  className="block w-72 lg:w-96 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    "
                />
              </h1>
              <button className="card left-52 lg:left-[300px] items-center rounded-full w-28 h-[30px] bg-blue-600 hover:bg-blue-700 font-bold">
                <h1 className="mt-1">SEND</h1>
              </button>
            </label>
          </form>
        </div>
        {/* BOTTOM */}
        <div className="flex lg:justify-center h-[700px] w-screen lg:h-0 lg:w-screen">
          <div className="card mt-72 lg:absolute lg:bottom-0 rounded-none w-full h-[500px] lg:mt-0 lg:w-screen lg:h-64 bg-blue-600">
            <div className="flex absolute right-0 bottom-0 w-40 h-32 lg:top-0 lg:w-80 lg:h-64">
              <Image src={comp} alt="" className="lg:h-full lg:w-full"></Image>
            </div>
            <div className="card-body mt-64 w-64 h-full lg:mt-0 lg:ml-32 lg:w-96 lg:h-full">
              <h1 className="font-bold text-xl lg:text-4xl">GET IN TOUCH</h1>
              <h1 className="lg:text-base text-sm">
                Hey! I am looking forward to start a project with you!
              </h1>
              <h1 className="text-sm mt-2">
                Please Contact me on my Social Media Accounts
              </h1>
              <div className="flex flex-row-5 gap-2">
                <a
                  href="https://www.facebook.com/iamcerbatosarvin"
                  className="flex justify-center rounded-full bg-white hover:bg-gray-500 w-[30px] h-[30px]"
                >
                  <Image src={fb} alt="" className="m-1 h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/aj.crbts/"
                  className="flex justify-center rounded-full bg-white hover:bg-gray-500 w-[30px] h-[30px]"
                >
                  <Image src={ig} alt="" className="m-1 h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/arvin-jay-cerbatos-4ba162260/"
                  className="flex justify-center rounded-full bg-white hover:bg-gray-500 w-[30px] h-[30px]"
                >
                  <Image src={li} alt="" className="m-1 h-5 w-5" />
                </a>
                <a
                  href="https://github.com/Iamcerbatosarvin"
                  className="flex justify-center rounded-full bg-white hover:bg-gray-500 w-[30px] h-[30px]"
                >
                  <Image src={gt} alt="" className="m-1 h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/Imcerbatosarvin"
                  className="flex justify-center rounded-full bg-white hover:bg-gray-500 w-[30px] h-[30px]"
                >
                  <Image src={tw} alt="" className="m-1 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* contact */}
        <div className="card absolute right-[60px] bottom-10 w-64 h-72 lg:bottom-20 lg:right-80 lg:w-72 lg:h-80 bg-white shadow-lg shadow-black">
          <div className="card-body items-center text-center">
            <h1 className="font-bold text-base lg:text-lg text-black lg:mt-1">
              CALL ME
            </h1>
            <h1 className="text-xs lg:text-sm text-black">
              Smart - 09071909138
            </h1>
            <h1 className="text-xs lg:text-sm text-black">
              Globe - 09668135186
            </h1>
            <h1 className="font-bold ttext-base lg:text-lg text-black mt-2">
              EMAIL
            </h1>
            <h1 className="text-xs lg:text-sm text-black">
              acerbatos@gmail.com
            </h1>
            <h1 className="font-bold text-base lg:text-lg text-black mt-2">
              LOCATION
            </h1>
            <h1 className="text-xs lg:text-sm text-black">
              122 Purok Phylum Brgy. Duhat Cavinti, Laguna, (4013)
            </h1>{" "}
          </div>
        </div>
      </div>
    </main>
  );
}
