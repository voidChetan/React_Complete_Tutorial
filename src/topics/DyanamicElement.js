import React from 'react';

const DyanamicElement = () => {

    let cityList = ["Pune", 'Nagpur', 'Mumabi', 'Thane'];

    let studentList = [
        { studId: 12, name: 'Sachin', mobiole: '9999888899' },
        { studId: 13, name: 'Rahul', mobiole: '7777666655' },
        { studId: 14, name: 'Rohit', mobiole: '1111222233' },
        { studId: 15, name: 'Virat', mobiole: '4444555566' }
    ]

    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <ul>
                        {
                            cityList.map((item, index) => {
                                return (<li> {index + 1} - {item} </li>)
                            })
                        }
                    </ul>
                </div>
                <div className='col-3'>
                    <select>
                        {
                            cityList.map((city) => {
                                return (<option> {city}</option>)
                            })
                        }

                    </select>
                </div>
                <div className='col-3'>
                    <select>
                         {
                            studentList.map( (student) => {
                                return ( <option value={student.studId}> {student.name} </option>)
                            })
                         }
                    </select>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Name</th>
                                <th>Mobile</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                studentList.map((item,index) => {
                                    return (<tr>
                                        <td> {index+1}</td>
                                        <td> {item.name}</td>
                                        <td>  {item.mobiole}</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default DyanamicElement;