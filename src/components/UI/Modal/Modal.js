import React from "react";
import ReactDOM from "react-dom";
import classes from './Modal.module.css'

const Backdrop=()=>{
    return <div className={classes.backdrop}/>
};

const ModalOverlay=(props)=>{
    return <div className={classes.modal}>{props.children}</div>
}


const Modal=(props)=>{
    const portalElement=document.getElementById('overlay')
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </React.Fragment>
};


export default Modal