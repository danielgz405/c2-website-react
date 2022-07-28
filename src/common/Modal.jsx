import { XCircleIcon } from '@heroicons/react/solid';

export default function Modal(props){

    return (
        <>
            {props.open &&
                (<div className="modal-fondo">
                    <div className="modal">
                        <div className="modal-header">
                            <h1>{props.title}</h1>
                            <XCircleIcon className="close" onClick={() => props.setOpen(!props.open)}/>
                        </div>
                        <div>
                            {props.children}
                        </div>
                    </div>
                </div>)
            }
        </>
    );
}