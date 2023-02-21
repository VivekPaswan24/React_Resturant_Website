import React from "react";
import ReactDOM from "react-dom";
import classes from './Modal.module.css'

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClick}/>
};

const ModalOverlay=(props)=>{
    return <div className={classes.modal}>{props.children}</div>
}


const Modal=(props)=>{
    const portalElement=document.getElementById('overlay')
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </React.Fragment>
};


export default Modal