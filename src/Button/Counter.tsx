import React, {useState} from 'react';
import {Button} from "./Button";


type CounterPropsType = {
    reset: () => void
    value: number
    addCounter:() => void
    ValueMin:number
    ValueMax:number
    CallBackDefaultAppCollapsed:()=>void
}


export const Counter: React.FC<CounterPropsType> = ({
                                                        reset,
                                                        value,
                                                        addCounter,
                                                        ValueMin,
                                                        ValueMax,
                                                        CallBackDefaultAppCollapsed
                                                    }) => {

const styleModule="CounterNumberWrapper"+" "+(value===ValueMax?"error_counter":"default_counter")
    return (
        <div className={"CounterWrapper"}>
<div className={styleModule}>{value}</div>
            <div className="CounterButtonWrapper"><Button nameButton={"RESET"} callBackButton={reset} disabledButton={ValueMin >= value}/>
                <Button nameButton={"ADD"} callBackButton={addCounter} disabledButton={ValueMax <= value}/>
                <Button nameButton={"SETTINGS"} callBackButton={CallBackDefaultAppCollapsed}/></div>
        </div>
    );
};

