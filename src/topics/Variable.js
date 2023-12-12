import React, { useState } from 'react';

const Variable = () => {
    // if we want to change variable value => using state
    // if we don't want to change variable value
    let totorialName = "React Js";
    const courseName = "Angular";

    let [studentName, setStudentName] = useState("Chetan");
    let [rollNo,setRollNo] = useState(123);
    let [currentDate, setCurrentDate] = useState(new Date());
    let [isActive, setIsActive] = useState(true);

    let [employeeObj,setEmployeeObj] = useState({empId:0,empName:'Shyam',empCity:'Pune', empDesignation:''});

    let [cityList,setCityList] = useState(["Pune","Nagpur","Jabalpur","Mumbai"]);

    let [employeeList, setEmployeeList] = useState([
        {empId:1,empName:'Chetan',empCity:'Pune', empDesignation:'Sr Soft Eng'},
        {empId:2,empName:'Rahul',empCity:'Mumabi', empDesignation:'Jr Soft Eng'},
        {empId:3,empName:'Ram',empCity:'Pune', empDesignation:'Sr QA'}
    ]); 

    return (
        <div>
            <div className='row'>
                <div className='col'>
                    {totorialName} - {courseName}
                </div>
                <div className='col'>
                    {studentName} - {rollNo} _ {currentDate.getFullYear()} -  {isActive ? 'Active': 'De-Active'}
                </div>
                <div className='col'>
                    {employeeObj.empName}
                </div>
                <div className='col'>
                    {cityList}
                </div>
                <div className='col'>
                    {employeeList[0].empId }
                </div>
            </div>
        </div>
    );
};

export default Variable;