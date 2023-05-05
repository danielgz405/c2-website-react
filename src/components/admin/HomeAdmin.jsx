import Porfile from "./see/Profile";
import PorfileEdit from "./edit/Profile";
import Store from "./see/Store";
import StoreEdit from "./edit/Store";
import SubNavigation from "./SubNavigation";
import { useState } from "react";
import { ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/outline";

export default function HomeAdmin({user, setAlert, auth, signOut}){
  const [current, setCurrent] = useState('Perfil');
  const [edit, setEdit] = useState(false);
  const subNavigation = [
    { name: 'Perfil', icon: UserCircleIcon, current: current === 'Perfil' },
    { name: 'Store', icon: ShoppingBagIcon, current: current === 'Store' },

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
            }[current]
          }
        </div>
      </div>
    </>
  );
};