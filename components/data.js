import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Docente universitaria",
  desc: "Imparto clases en la Faculta de Ingeniería, tanto en nivel licenciatura como en maestría.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Clases",
      desc: "Imparto clases relacionadas con métodos de investigación, así como también algunas materias universitarias.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Asesorías y tutorías",
      desc: "Doy sesiones de asesoría (individual o grupal) sobre las asignaturas que imparto. También doy sesiones de tutoría para dar acompañamiento académico personalizado a algunos estudiantes.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Investigación",
      desc: "Los temas que más me interesan en investigación son: tecnología educativa, formación docente en TIC, competencias digitales, CSCL (Computer Supported Collaborative Learning), entre otros.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
