import React from 'react';
import "./../App.css"

export type ButtonTypeProps = {
    nameButton: string
    callBackButton: () => void
    disabledButton?:boolean
}


export const Button: React.FC<ButtonTypeProps> = ({
                                                      nameButton,
                                                      callBackButton,
                                                      disabledButton,
                                                  }) => {
    const onClickHandler=()=>{
        callBackButton()
    }
    console.log(disabledButton)
    return (
        <div>
            <button onClick={onClickHandler} disabled={disabledButton} className={disabledButton?"disabledButtonStyle":""}>{nameButton}</button>
        </div>
    );
};

