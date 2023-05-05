import { useState } from 'react';
import styleProjects from '../../../assets/css/proyectos.module.css';
import Modal from '../../../common/Modal';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Image({item, index}) {
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    return (
        <>
            <div key={index} className={styleProjects.galeriaImgContainer}>
                <div role='presentation' onClick={() => setOpen(!open)}  className={classNames(styleProjects[item.imagenLeft.class], styleProjects.imgGaleria)} style={item.imagenLeft.style}></div>
                <div role='presentation' onClick={() => setOpen1(!open1)}  className={classNames(styleProjects[item.imagenCenter.class], styleProjects.imgGaleria)} style={item.imagenCenter.style}></div>
                <div role='presentation' onClick={() => setOpen2(!open2)}  className={classNames(styleProjects[item.imagenRight.class], styleProjects.imgGaleria)} style={item.imagenRight.style}></div>
            </div>
            <Modal open={open} setOpen={setOpen} title='' >
                <div className={classNames(styleProjects.imgGaleria, styleProjects.imgModal)} style={item.imagenLeft.style}></div>
            </Modal>
            <Modal open={open1} setOpen={setOpen1} title='' >
                <div className={classNames(styleProjects.imgGaleria, styleProjects.imgModal)} style={item.imagenCenter.style}></div>
            </Modal>
            <Modal open={open2} setOpen={setOpen2} title='' >
                <div className={classNames( styleProjects.imgGaleria, styleProjects.imgModal)} style={item.imagenRight.style}></div>
            </Modal>
        </>
    )

}