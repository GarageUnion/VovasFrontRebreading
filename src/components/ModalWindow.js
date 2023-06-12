import React from "react";
import '../css/modalwindow.css'

const ModalWindow = ({active, setActive}) => {
    return(
        <div className={active ? "ModalActive" : "Modal"} onClick={()=>setActive(false)}>
            <div className="ModalContent" onCLick={e=>e.stopPropagation()}>
                
            </div>

        </div>
    )
}

export default ModalWindow