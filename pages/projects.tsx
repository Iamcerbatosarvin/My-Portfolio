import Navbar from "../components/navbar";
import Image from "next/image";
import { Inter } from "next/font/google";
import chi from "../img/chinese.png";
import pt from "../img/PT.png";
import home from "../img/front.png";

const inter = Inter({ subsets: ["latin"] });

export default function projects() {
  return (
    <main
      className={`flex min-h-screen bg-[url(../img/wallpaperflare.com_wallpaper.jpg)] bg-no-repeat bg-cover bg-fixed ${inter.className}`}
    >
      <div>
        <Navbar></Navbar>
        <div className="flex justify-center w-screen lg:w-[1225px] mt-5">
          <div className="card rounded-none bg-blue-600 w-40 h-20 lg: lg:w-[400px] lg:h-[200px]">
            <h1 className="card-body mt-[-10px] text-4xl lg:mt-0 lg:text-9xl font-bold">
              PROJ
            </h1>
          </div>
          <div className="card rounded-none border-2 border-blue-600 w-40 h-20 lg:w-[400px] lg:h-[200px]">
            <h1 className="card-body mt-[-10px] text-4xl lg:mt-0 lg:text-9xl font-bold text-blue-600">
              ECTS
            </h1>
          </div>
        </div>

        {/* Projects */}
        <div className="flex justify-center mt-10 mb-10 lg:mb-0">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-20 ">
            <div className="column-1">
              <div className="flex border-2 border-blue-600 items-center h-[200px] w-[300px]">
                <Image src={pt} alt="" className="h-full"></Image>
              </div>
              <h1 className="card items-center rounded-none bg-blue-600 text-base lg:text-lg font-bold">
                PERIODIC TABLE
              </h1>
            </div>
            <div className="column-2">
              <div className="flex border-2 border-blue-600 items-center h-[200px] w-[300px]">
                <Image src={chi} alt="" className="h-full"></Image>
              </div>
              <h1 className="card items-center rounded-none bg-blue-600 text-lg font-bold">
                CHINESE CUISINE
              </h1>
            </div>
            <div className="column-3">
              <div className="flex border-2 border-blue-600 items-center h-[200px] w-[300px]">
                <Image
                  src={home}
                  alt=""
                  className="h-[195px] w-[295px]"
                ></Image>
              </div>
              <h1 className="card items-center rounded-none bg-blue-600 text-lg font-bold">
                MY PORTFOLIO
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
