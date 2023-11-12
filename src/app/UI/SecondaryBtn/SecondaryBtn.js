import React from "react";
import classes from './SecondaryBtn.module.css'


function SecondaryBtn (props) {

    
    return(
        <button className={classes.btnStyle}
                style={{width: props.width, minWidth:props.minWidth, maxWidth: props.maxWidth, backgroundColor:props.backgroundColor}}
                type={props.type || 'button'}
                disabled={props.disabled}
                onClick={props.OnClick}>
            {props.children}
        </button>
    )
}


export default SecondaryBtn;