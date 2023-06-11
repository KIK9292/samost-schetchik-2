import React from 'react';
import {Input} from "./Input";
import {Button} from "./Button";
import "./../App.css"

type CounterSettingsTypeProps={
    CallBackMenuButtonSettings:()=>void
    CallBackMaxValueInputSettings:(value:number)=>void
    CallBackMinValueInputSettings:(value:number)=>void
    ValueMax:number
    ValueMin:number
}



export const CounterSettings = (props:CounterSettingsTypeProps) => {
    const {CallBackMenuButtonSettings,CallBackMaxValueInputSettings,CallBackMinValueInputSettings,ValueMax,ValueMin}=props
    return (
        <div className="settingsMenuWrapper">
            <div className="settingsMenuInput">
                <div>MAX</div>
                <Input callbackInput={CallBackMaxValueInputSettings} value={ValueMax}
                       classValue={ValueMax < ValueMin || ValueMax < 0 ? "error_counter" : "default_counter"}/>
                <div>MIN</div>
                <Input callbackInput={CallBackMinValueInputSettings} value={ValueMin}
                       classValue={ValueMax < ValueMin || ValueMin < 0 ? "error_counter" : "default_counter"}/></div>
            <Button  nameButton={"SETTINGS"} callBackButton={CallBackMenuButtonSettings} disabledButton={(ValueMax<=0)||(ValueMin<0)||(ValueMax<ValueMin)||(ValueMax===ValueMin)}/>
        </div>
    );
};

