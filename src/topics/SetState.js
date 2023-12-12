import React, { useState } from 'react';

const SetState = () => {

    let [studentName, setStudentName] = useState('');
    let [rollNo, setRollNo] = useState(0);

    let [employeeObj, setEmployeeObj] = useState({ empName: '', empCity: '', empContactNo: '' });

    const changeStudentName = (event) => {
        debugger;
        const txtValue = event.target.value;
        setStudentName(txtValue);
    }

    const changeRollNo = (event) => {
        setRollNo(event.target.value)
    }

    const chnageEmpName = (event) => {
        setEmployeeObj(prevState => ( { ...prevState, empName: event.target.value } ) )
    }
    const chnageEmpCity = (event) => {
        setEmployeeObj(prevState => ( { ...prevState, empCity: event.target.value } ) )
    }
    const chnageEmpContact = (event) => {
        setEmployeeObj(prevState => ( { ...prevState, empContactNo: event.target.value } ) )
    }

    const changeObjValue  = (event, field) => {
        setEmployeeObj(prevState => ( { ...prevState, [field]: event.target.value } ) )
    }

    let [cityList,setCityList] = useState(['Pune','Mumbai']);

    let [cityName, setCityName] = useState('')

    const chnageCityName = (event)=> {
        setCityName(event.target.value)
    }

    const addCity = () => {
        setCityList(prevArray => ( [...prevArray, cityName] ));
    }

    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <input type='text' onChange={(event)=> {chnageCityName(event)}} className='form-control' placeholder='ENtre CIty' />
                 </div>
                 <div className='col-2'>
                    <input type='button' onClick={addCity} className='btn btn-success' value='Add CIty' />
                 </div>
                 <div className='col-3'>
                    {cityList}
                 </div>
            </div>
            <h5> {employeeObj.empName} - {employeeObj.empCity} - {employeeObj.empContactNo}</h5>
            {/* <div className='row'>
                <div className='col-2'>
                    <input type='text' onChange={(event)=> {chnageEmpName(event)}} className='form-control' placeholder='Name'/>
                </div>
                <div className='col-2'>
                  <input type='text'  onChange={(event)=> {chnageEmpCity(event)}} className='form-control' placeholder='City'/> 
                </div>
                <div className='col-2'>
                  <input type='text'  onChange={(event)=> {chnageEmpContact(event)}} className='form-control' placeholder='Contact'/>
                </div>
            </div> */}
            <div className='row'>
                <div className='col-2'>
                    <input type='text' onChange={(event)=> {changeObjValue(event,'empName')}} className='form-control' placeholder='Name'/>
                </div>
                <div className='col-2'>
                  <input type='text'  onChange={(event)=> {changeObjValue(event ,'empCity')}} className='form-control' placeholder='City'/> 
                </div>
                <div className='col-2'>
                  <input type='text'  onChange={(event)=> {changeObjValue(event, 'empContactNo')}} className='form-control' placeholder='Contact'/>
                </div>
            </div>

            <div className='row'>
                <div className='col-2'>
                    studentName - {studentName}
                </div>
                <div className='col-2'>
                    rollNo - {rollNo}
                </div>
            </div>
            <div className='row'>
                <div className='col-2'>
                    <input type='text' onChange={(event) => { changeStudentName(event) }} placeholder='Enter Name' className='form-control' />
                </div>
                <div className='col-2'>
                    <input type='text' onChange={(event) => { changeRollNo(event) }} placeholder='Enter Rool no' className='form-control' />
                </div>
            </div>
        </div>
    );
};

export default SetState;