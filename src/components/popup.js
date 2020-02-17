import React from 'react';



const modal = (props) => {
    return (
        <div>
           
            <div className="modal-wrapper"
            
                style={{
                    visibility: props.show ? 'visible' : 'hidden',
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    width : '400px'
                }}>
                <div className="modal-header">
                    <h3> Evidencia</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                <img src={'https://zapacademy.herokuapp.com/'+props.image+'.jpg'} width="350px" height="450px" />
                    <p>
                        {props.children}
                       
                        
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CERRAR</button>
                  
                </div>
            </div>
        </div>
    )
}

export default modal;
