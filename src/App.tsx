// import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {Counter} from "./Button/Counter";
// import {CounterSettings} from "./Button/CounterSettings";
//
// // Типизация стейта мин и макс значений
// export type ValuesCounterType = {
//     counter: number
//     settings: SettingsType
// }
//
// export type SettingsType = {
//     ValueMin: number
//     ValueMax: number
//     DefaultAppCollapsed: boolean
//
// }
//
// function App() {
// //Стейт мин и макс значений
//     const [valuesCounter, setValuesCounter] = useState<ValuesCounterType>({
//         counter: 0,
//         settings: {
//             ValueMin: 1,
//             ValueMax: 5,
//             DefaultAppCollapsed: false
//
//
//         }
//     })
//      console.log(valuesCounter)
//     //Колбек для измениния дефолтного состояния начальной страницы
//     const CallBackDefaultAppCollapsed = () => {
//         setValuesCounter({
//             ...valuesCounter,
//             settings: {...valuesCounter.settings, DefaultAppCollapsed: !valuesCounter.settings.DefaultAppCollapsed}
//         })
//         console.log(valuesCounter)
//     }
//     // localStorage.setItem("DefaultAppCollapsed",JSON.stringify(!valuesCounter.settings.DefaultAppCollapsed))
//     // Коллбек для кнопки настроек в меню настроек сетаем настройки дефолтного состояния начальной страницы и новое значение счетчика
//     const CallBackMenuButtonSettings = () => {
//         setValuesCounter({
//             ...valuesCounter,
//             settings: {...valuesCounter.settings, DefaultAppCollapsed: !valuesCounter.settings.DefaultAppCollapsed},
//             counter: valuesCounter.settings.ValueMin
//         })
//         console.log(valuesCounter)
//     }
// //   Коллбек для инпута Максимального значения счетчика в меню настроек
//     const CallBackMaxValueInputSettings = (value: number) => {
//         setValuesCounter({...valuesCounter, settings: {...valuesCounter.settings, ValueMax: value}})
//         // localStorage.setItem("ValueCounterMax",JSON.stringify(valuesCounter.settings.ValueMax))
//     }
//
// //   Коллбек для инпута Минимального значения счетчика в меню настроек
//     const CallBackMinValueInputSettings = (value: number) => {
//         setValuesCounter({...valuesCounter, settings: {...valuesCounter.settings, ValueMin: value}})
//         // localStorage.setItem("ValueCounterMin",JSON.stringify(valuesCounter.settings.ValueMin))
//     }
//
// // Переменная для передачи отобраения счетчика
//     const value = valuesCounter.counter;
//
// //Минимальное значение счетчика(нуно для проверки DISSABLE
//     const ValueMin = valuesCounter.settings.ValueMin
//     //Максимальное значение счетчика(нуно для проверки DISSABLE
//     const ValueMax = valuesCounter.settings.ValueMax
// //Флаг страницы или настройки или счетчик
//     const DefaultAppCollapsed = valuesCounter.settings.DefaultAppCollapsed
// // Каллбэк по добавлению счетчика
//     const addCounter = () => {
//         setValuesCounter({...valuesCounter, settings: {...valuesCounter.settings}, counter: valuesCounter.counter + 1})
//         // localStorage.setItem("ValueCounter",JSON.stringify(valuesCounter.counter))
//     }
//
//     // useEffect(() => {
//     //     localStorage.setItem("valuesCounter", JSON.stringify(valuesCounter))
//     // }, [valuesCounter])
//     useEffect( ()=> {
//         localStorage.setItem("ValueCounterMax",JSON.stringify(valuesCounter.settings.ValueMax))
//         localStorage.setItem("ValueCounterMin",JSON.stringify(valuesCounter.settings.ValueMin))
//         localStorage.setItem("DefaultAppCollapsed",JSON.stringify(!valuesCounter.settings.DefaultAppCollapsed))
//         if(valuesCounter) {
//             localStorage.setItem("ValueCounter", JSON.stringify(valuesCounter.counter))
//         }
//     }, [valuesCounter] )
//
//     useEffect(() => {
//         const ValuesCounter = localStorage.getItem("ValueCounter")
//         const ValueCounterMin = localStorage.getItem("ValueCounterMin")
//         const ValueCounterMax = localStorage.getItem("ValueCounterMax")
//         const DefaultAppCollapsed = localStorage.getItem("DefaultAppCollapsed")
//         if (ValuesCounter) {
//             // setValuesCounter({...valuesCounter, counter: JSON.parse(ValuesCounter)})
//             setValuesCounter(prevValuesCounter => ({...prevValuesCounter, counter: JSON.parse(ValuesCounter)}))
//         }
//         if (ValueCounterMin) {
//             setValuesCounter({...valuesCounter,  settings: {...valuesCounter.settings, ValueMin:JSON.parse(ValueCounterMin)}})
//         }
//         if (ValueCounterMax) {
//             setValuesCounter({...valuesCounter, settings: {...valuesCounter.settings, ValueMin:JSON.parse(ValueCounterMax)}})
//         }
//         if (DefaultAppCollapsed) {
//             setValuesCounter({...valuesCounter, settings: {...valuesCounter.settings, ValueMin:JSON.parse(DefaultAppCollapsed)}})
//         }
//     }, [])
// //Каллбэк по кнопке Резет
//     const reset = () => {
//         setValuesCounter({
//             ...valuesCounter,
//             settings: {...valuesCounter.settings},
//             counter: valuesCounter.settings.ValueMin
//         })
//     }
// ///
//
//     return (
//         <div className="App">
//             {!DefaultAppCollapsed ?
//                 <Counter reset={reset}
//                          value={value}
//                          addCounter={addCounter}
//                          ValueMin={ValueMin}
//                          ValueMax={ValueMax}
//                          CallBackDefaultAppCollapsed={CallBackDefaultAppCollapsed}
//
//
//                 /> :
//                 <CounterSettings CallBackMenuButtonSettings={CallBackMenuButtonSettings}
//                                  CallBackMaxValueInputSettings={CallBackMaxValueInputSettings}
//                                  CallBackMinValueInputSettings={CallBackMinValueInputSettings}
//                                  ValueMin={ValueMin}
//                                  ValueMax={ValueMax}/>}
//         </div>
//     );
// }
//
// export default App;
// import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Counter } from "./Button/Counter";
// import { CounterSettings } from "./Button/CounterSettings";
//
// export type ValuesCounterType = {
//     counter: number;
//     settings: SettingsType;
// };
//
// export type SettingsType = {
//     ValueMin: number;
//     ValueMax: number;
//     DefaultAppCollapsed: boolean;
// };
//
// function App() {
//     const [valuesCounter, setValuesCounter] = useState<ValuesCounterType>(() => {
//         const storedValues = localStorage.getItem("valuesCounter");
//         if (storedValues) {
//             return JSON.parse(storedValues);
//         } else {
//             return {
//                 counter: 0,
//                 settings: {
//                     ValueMin: 1,
//                     ValueMax: 5,
//                     DefaultAppCollapsed: false
//                 }
//             };
//         }
//     });
//
//     const handleCounterUpdate = (newValues: ValuesCounterType) => {
//         setValuesCounter(newValues);
//         localStorage.setItem("valuesCounter", JSON.stringify(newValues));
//     };
//
//     const CallBackDefaultAppCollapsed = () => {
//         handleCounterUpdate({
//             ...valuesCounter,
//             settings: {
//                 ...valuesCounter.settings,
//                 DefaultAppCollapsed: !valuesCounter.settings.DefaultAppCollapsed
//             }
//         });
//     };
//
//     const CallBackMenuButtonSettings = () => {
//         handleCounterUpdate({
//             ...valuesCounter,
//             settings: {
//                 ...valuesCounter.settings,
//                 DefaultAppCollapsed: !valuesCounter.settings.DefaultAppCollapsed
//             },
//             counter: valuesCounter.settings.ValueMin
//         });
//     };
//
//     const CallBackMaxValueInputSettings = (value: number) => {
//         handleCounterUpdate({
//             ...valuesCounter,
//             settings: {
//                 ...valuesCounter.settings,
//                 ValueMax: value
//             }
//         });
//     };
//
//     const CallBackMinValueInputSettings = (value: number) => {
//         handleCounterUpdate({
//             ...valuesCounter,
//             settings: {
//                 ...valuesCounter.settings,
//                 ValueMin: value
//             }
//         });
//     };
//
//     const value = valuesCounter.counter;
//     const ValueMin = valuesCounter.settings.ValueMin;
//     const ValueMax = valuesCounter.settings.ValueMax;
//     const DefaultAppCollapsed = valuesCounter.settings.DefaultAppCollapsed;
//
//     const addCounter = () => {
//         handleCounterUpdate({
//             ...valuesCounter,
//             counter: valuesCounter.counter + 1
//         });
//     };
//
//     const reset = () => {
//         handleCounterUpdate({
//             ...valuesCounter,
//             counter: valuesCounter.settings.ValueMin
//         });
//     };
//
//     return (
//         <div className="App">
//             {!DefaultAppCollapsed ? (
//                 <Counter
//                     reset={reset}
//                     value={value}
//                     addCounter={addCounter}
//                     ValueMin={ValueMin}
//                     ValueMax={ValueMax}
//                     CallBackDefaultAppCollapsed={CallBackDefaultAppCollapsed}
//                 />
//             ) : (
//                 <CounterSettings
//                     CallBackMenuButtonSettings={CallBackMenuButtonSettings}
//                     CallBackMaxValueInputSettings={CallBackMaxValueInputSettings}
//                     CallBackMinValueInputSettings={CallBackMinValueInputSettings}
//                     ValueMin={ValueMin}
//                     ValueMax={ValueMax}
//                 />
//             )}
//         </div>
//     );
// }
//
// export default App;
import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./Button/Counter";
import {CounterSettings} from "./Button/CounterSettings";

export type ValuesCounterType = {
    counter: number;
    settings: SettingsType;
};

export type SettingsType = {
    ValueMin: number;
    ValueMax: number;
    DefaultAppCollapsed: boolean;
};

function App() {
    const [valuesCounter, setValuesCounter] = useState<ValuesCounterType>({
        counter: 0,
        settings: {
            ValueMin: 0,
            ValueMax: 5,
            DefaultAppCollapsed: false
        }
    });

    const value = valuesCounter.counter;
    const ValueMin = valuesCounter.settings.ValueMin;
    const ValueMax = valuesCounter.settings.ValueMax;
    const DefaultAppCollapsed = valuesCounter.settings.DefaultAppCollapsed;

    const CallBackDefaultAppCollapsed = () => {
        if (ValueMin >= value) {
            setValuesCounter({...valuesCounter, counter: ValueMin})
        }
        if (value >= ValueMax) {
            setValuesCounter({...valuesCounter, counter: ValueMax})
        }
        setValuesCounter(prevValuesCounter => ({
            ...prevValuesCounter,
            settings: {
                ...prevValuesCounter.settings,
                DefaultAppCollapsed: !prevValuesCounter.settings.DefaultAppCollapsed
            }
        }));
        if (DefaultAppCollapsed) {
            localStorage.setItem("ValueCounterMin", JSON.stringify(ValueMin));
            localStorage.setItem("ValueCounterMax", JSON.stringify(ValueMax));
        }
    };

    // const CallBackMenuButtonSettings = () => {
    //     // setValuesCounter(=> ({
    //     //
    //     //     settings: {
    //     //         ...prevValuesCounter.settings,
    //     //         DefaultAppCollapsed: !prevValuesCounter.settings.DefaultAppCollapsed
    //     //     }
    //     // }));
    //     if (ValueMin >= value) {
    //         setValuesCounter({...valuesCounter, counter: ValueMin})
    //     }
    //     if (value >= ValueMax) {
    //         setValuesCounter({...valuesCounter, counter: ValueMax})
    //     }
    //     setValuesCounter({
    //         ...valuesCounter,
    //         settings: {...valuesCounter.settings, DefaultAppCollapsed: !DefaultAppCollapsed}
    //     });
    //     console.log(ValueMin)
    //
    // };

    const CallBackMaxValueInputSettings = (value: number) => {
        setValuesCounter(prevValuesCounter => ({
            ...prevValuesCounter,
            settings: {...prevValuesCounter.settings, ValueMax: value}
        }));
    };

    const CallBackMinValueInputSettings = (value: number) => {
        setValuesCounter(prevValuesCounter => ({
            ...prevValuesCounter,
            settings: {...prevValuesCounter.settings, ValueMin: value}
        }));
    };

    const addCounter = () => {
        setValuesCounter(prevValuesCounter => ({
            ...prevValuesCounter,
            counter: prevValuesCounter.counter + 1
        }));

    };

    useEffect(() => {
        if(value){
            localStorage.setItem("ValueCounter", JSON.stringify(value))
        }
    }, [value])
    useEffect(() => {
        const ValuesCounter = localStorage.getItem("ValueCounter");
        const ValueCounterMin = localStorage.getItem("ValueCounterMin");
        const ValueCounterMax = localStorage.getItem("ValueCounterMax");


        if (ValuesCounter) {
            setValuesCounter(prevValuesCounter => ({
                ...prevValuesCounter,
                counter: JSON.parse(ValuesCounter)
            }));
        }
        if (ValueCounterMin) {
            setValuesCounter(prevValuesCounter => ({
                ...prevValuesCounter,
                settings: {...prevValuesCounter.settings, ValueMin: JSON.parse(ValueCounterMin)}
            }));
        }
        if (ValueCounterMax) {
            setValuesCounter(prevValuesCounter => ({
                ...prevValuesCounter,
                settings: {...prevValuesCounter.settings, ValueMax: JSON.parse(ValueCounterMax)}
            }));
        }

    }, []);

    const reset = () => {
        setValuesCounter(prevValuesCounter => ({
            ...prevValuesCounter,
            counter: prevValuesCounter.settings.ValueMin
        }));
    };

    return (
        <div className="App">
            {!DefaultAppCollapsed ? (
                <Counter
                    reset={reset}
                    value={value}
                    addCounter={addCounter}
                    ValueMin={ValueMin}
                    ValueMax={ValueMax}
                    CallBackDefaultAppCollapsed={CallBackDefaultAppCollapsed}
                />
            ) : (
                <CounterSettings
                    CallBackMenuButtonSettings={CallBackDefaultAppCollapsed}
                    CallBackMaxValueInputSettings={CallBackMaxValueInputSettings}
                    CallBackMinValueInputSettings={CallBackMinValueInputSettings}
                    ValueMin={ValueMin}
                    ValueMax={ValueMax}
                />
            )}
        </div>
    );
}

export default App;
