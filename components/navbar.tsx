import Link from "next/link";
import Image from "next/image";
import house from "../img/house-solid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "../img/arvin jay cerbatos.png";

export default function navbar() {
  return (
    <div className="navbar bg-transparent font-bold text-blue-600">
      <Image src={logo} alt="" className="w-36 lg:w-[180px] absolute" />
      <div className="flex-none absolute right-0 lg:right-1">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/" className="">
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          </li>
          <li>
            <Link href="/profile" className="">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
          <li>
            <Link href="/projects" className="mt-[-2px]">
              PROJECTS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
