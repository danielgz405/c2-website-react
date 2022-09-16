import { InformationCircleIcon } from "@heroicons/react/solid";

export default function Home(){
    return (
      <>
        <div
        type="button"
        className="commingSon"
        >
          <InformationCircleIcon className="commingSonIcon"/>
          <span className="commingSonText">Estamos trabajando para ofrecerte este servicio</span>
        </div>
      </>
    );
};