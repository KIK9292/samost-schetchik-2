import React, {ChangeEvent} from 'react';

type InuputTypeProps={
    callbackInput:(value:number)=>void
    value:number
    classValue:string
}


export const Input:React.FC<InuputTypeProps> = ({
                                                    callbackInput,
                                                    value,
                                                    classValue
                                                }) => {
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        callbackInput(e.currentTarget.valueAsNumber)
    }
    return (
        <div>
            <input value={value} type="number" onChange={onChangeHandler} className={classValue}/>
        </div>
    );
};

