import { useState } from "react";
import SubNavigation from "./SubNavigation";
import { UserCircleIcon, TagIcon, PhotographIcon, UsersIcon, AnnotationIcon, HomeIcon, ShoppingBagIcon  } from '@heroicons/react/outline';
import PorfileEdit from "./edit/Profile"
import Porfile from "./see/Profile";
import StoreEdit from "./edit/Store";
import Store from "./see/Store";
import HomeEdit from "./edit/Home";
import Home from "./see/Home";
import ServicesEdit from "./edit/Services";
import Services from "./see/Services";
import ProjectsEdit from "./edit/Projects";
import Projects from "./see/Projects";
import AboutUsEdit from "./edit/AboutUs";
import AboutUs from "./see/AboutUs";
import ContactEdit from "./edit/Contact";
import Contact from "./see/Contact";

export default function HomeAdmin({user, setAlert, auth, signOut}){
  const [current, setCurrent] = useState('Perfil');
  const [edit, setEdit] = useState(false);
  const subNavigation = [
    { name: 'Perfil', icon: UserCircleIcon, current: current === 'Perfil' },
    { name: 'Store', icon: ShoppingBagIcon, current: current === 'Store' },
    { name: 'Home', icon: HomeIcon, current: current === 'Home' },
    { name: 'Servicios', icon: TagIcon, current: current === 'Servicios' },
    { name: 'Proyectos', icon: PhotographIcon, current: current === 'Proyectos' },
    { name: 'Nosotros', icon: UsersIcon, current: current === 'Nosotros' },
    { name: 'Contacto', icon: AnnotationIcon, current: current === 'Contacto' },
  ];
  return (
    <>
      <div className="homeContainer">
        <SubNavigation subNavigation={subNavigation} setCurrent={setCurrent} />
        <div className="">
          {
            {
              Perfil: edit ? <PorfileEdit setAlert={setAlert} setEdit={setEdit} edit={edit} user={user} /> : <Porfile setEdit={setEdit} edit={edit} user={user} setAlert={setAlert} />,
              Store: edit ? <StoreEdit setEdit={setEdit} edit={edit} setAlert={setAlert} auth={auth} signOut={signOut} /> : <Store setEdit={setEdit} edit={edit} setAlert={setAlert} auth={auth} signOut={signOut} />,
              Home: edit ? <HomeEdit /> : <Home setEdit={setEdit} />,
              Servicios: edit ? <ServicesEdit /> : <Services setEdit={setEdit} />,
              Proyectos: edit ? <ProjectsEdit /> : <Projects setEdit={setEdit} />,
              Nosotros: edit ? <AboutUsEdit /> : <AboutUs setEdit={setEdit} />,
              Contacto: edit ? <ContactEdit /> : <Contact setEdit={setEdit} />,
            }[current]
          }
        </div>
      </div>
    </>
  );
};