import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaFileAlt,
  FaAddressCard,
  FaCloudSun,
  FaBlog,
} from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";


export const navigationItem = [
  { id: 1, name: "Offering", src: "/", current: true, icon: FaHome },
  { id: 2, name: "Selection-Process", src: "/", current: false, icon: FaUser },
  {
    id: 3,
    name: "Why Join?",
    src: "/#Section4",
    current: false,
    icon: FaLaptopCode,
  },
  {
    id: 4,
    name: "Join Now",
    src: "/",
    current: false,
    icon: FaAddressCard,
  },
];
