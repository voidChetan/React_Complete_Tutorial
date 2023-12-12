import React from 'react';

const Events = () => {

    const printName = () => {
        console.log("Chetan")
    }

    const showAlert = (message) => {
        alert(message)
    }

    const getSum = (num1, num2) => {
        return num1 + num2;
    }

    const showSelectedCity = (event) => {
        debugger;
        alert(event.target.value);
    }


    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <button className='btn btn-primary' onClick={printName}>Print Name</button>
                </div>
                <div className='col-3'>
                    <button className='btn btn-primary' onClick={ () => { showAlert('Hi From Btn 2') } }>Button 2</button>
                </div>
                <div className='col-3'>
                    <button className='btn btn-primary' onClick={ () => { showAlert("Hi From Button 3")} }>Button 3</button>
                </div>
                <div className='col-3'>
                    <h1>{ getSum(2,5) }</h1> 
                </div> 
            </div>
            <div className='row'>
                <div className='col-3'>
                    <select onChange={ (event) => { showSelectedCity(event) }} className='form-select'>
                        <option value="">Select City</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Nagpur">Nagpur</option> 
                    </select>
                </div>
            </div>
            
        </div>
    );
};

export default Events;