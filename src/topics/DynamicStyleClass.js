import React, { useState } from 'react';

const DynamicStyleClass = () => {

    let[div1BgColor, setDiv1Color] = useState('');

    let[div3BgClassName, setdiv3BgClassName] = useState('');

    let[isDiv2Active, setisDiv2Active] = useState(false);

    const addBlueBg = () => {
        setDiv1Color('blue')
    }
    const addGreenBg = () => {
        setDiv1Color('green')
    }
    const toggleValue = () => {
        setisDiv2Active(!isDiv2Active)
    }
    const changeDiv3Class = (className) => {
        setdiv3BgClassName(className);
    }

    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <div className='p-3' style={{backgroundColor:div1BgColor,color:'white'}}>
                        Div 1 - {div1BgColor}
                    </div>
                </div>
                <div className='col-3'>
                    <div className='p-3' style={{backgroundColor: isDiv2Active ? 'red': 'yellow'}}  >
                        Div 2 - {isDiv2Active ?'true':'false'}
                    </div>
                </div>
                <div className='col-3'>
                    <div className={`p-3 ${div3BgClassName}`}>
                        Div 3 - {div3BgClassName}
                    </div>
                </div>
                <div className='col-3'>
                    <div className={`p-3 ${isDiv2Active ? 'bg-danger' :'bg-warning'}`}>
                        Div 3 - {div3BgClassName}
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                     <button className='btn btn-primary' onClick={addBlueBg}> Add Blue Bg</button>
                     <button className='btn btn-success' onClick={addGreenBg}> Add Green Bg</button>
                </div>
                <div className='col-3'> 
                     <button className='btn btn-success' onClick={toggleValue}> Toggle</button>
                </div>
                <div className='col-3'>
                     <button className='btn btn-primary' onClick={()=>{changeDiv3Class('bg-primary')}}> Add Blue Bg</button>
                     <button className='btn btn-success' onClick={()=> {changeDiv3Class('bg-success')}}> Add Green Bg</button>
                </div>
            </div>
            
        </div>
    );
};

export default DynamicStyleClass;